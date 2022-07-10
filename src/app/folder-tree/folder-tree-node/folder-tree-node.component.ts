import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TreeNodeModel } from 'src/app/shared/treenode.model';
import { ToastrService } from 'ngx-toastr';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-folder-tree-node',
  templateUrl: './folder-tree-node.component.html',
  styleUrls: ['./folder-tree-node.component.scss']
})
export class FolderTreeNodeComponent implements OnInit {

  @Input('folderData')
  folderData!: TreeNodeModel[];
  constructor(private toasterSvc: ToastrService) { }
  treeDataForm!: FormGroup;
  @ViewChild(MatMenuTrigger)
  trigger?: MatMenuTrigger;


  ngOnInit(): void {
    this.initializationTreeForm();
  }

  //intialized form
  initializationTreeForm() {
    this.treeDataForm = new FormGroup({
      fileName: new FormControl('', [Validators.required]),
      fileType: new FormControl('', [Validators.required])
    })
  }

  //genrate uniqueid for node
  uniqueID() {
    return Math.random().toString().slice(5);
  };

  //for show form and set bydefault folder
  addFolderOrFiles(item: any) {
    item.showForm = true;
    this.treeDataForm.controls['fileType'].setValue('folder');
  }

  //add node into tree
  adddNodeIntoTree(item: TreeNodeModel) {

    //value of formcontrol name of treeDataForm
    const formValue = this.treeDataForm.value

    // if file name will  not available , then code will be  return from here
    if (!(this.treeDataForm.value.fileName).trim()) {
      this.toasterSvc.error("Please enter file or folder name")
      return;
    }

    // create json for current node
    const newNode: any = {
      name: formValue.fileName.trim(),
      type: formValue.fileType,
      id: this.uniqueID(),
      children: []
    }
    //if items children available it will push newnode into items children
    if (item?.children?.length) {
      item.children.push(newNode)
    }

    //else create children[] and push new node
    else {
      item.children = []
      item.children.push(newNode)
    }

    item.showForm = false;
    this.treeDataForm.reset()
    console.log(newNode)
  }

  //delete node from tree
  deleteNodefromTree(folderData: any, index: number) {
    folderData.splice(index, 1);
  }
  openMenu(trigger:any) {
    trigger.openMenu();
  }

  closeMenu(trigger:any) {
    trigger.closeMenu();
  }
}
