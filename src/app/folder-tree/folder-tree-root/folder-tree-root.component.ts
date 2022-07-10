import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { TreeNodeModel } from 'src/app/shared/treenode.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-folder-tree-root',
  templateUrl: './folder-tree-root.component.html',
  styleUrls: ['./folder-tree-root.component.scss']
})
export class FolderTreeRootComponent implements OnInit {
  @ Input('folderData') folderData!: TreeNodeModel[];
  rootFolderDataForm!: FormGroup;
  showForm:any;

  constructor(private toasterSvc: ToastrService) { }
  

  ngOnInit(): void {
    this.intializedForm();
  }

  //intialized form
  intializedForm(){
    this.rootFolderDataForm = new FormGroup({
      fileName: new FormControl('', [Validators.required]),
    })
  }

  //genrate unique Id
  uniqueID() {
    return Math.random().toString().slice(5);
  };

  //add root folder into tree 
  addRootNodeIntoTree(){
    const formValue = this.rootFolderDataForm.value

    // if file name will  not available , then code will be  return from here
    if (!(this.rootFolderDataForm.value.fileName).trim()) {
      this.toasterSvc.error("Please enter file or folder name")
      return;
    }

    // create json for current node
    const newNode:any = {
      name: formValue.fileName.trim(),
      type: 'folder',
      id: this.uniqueID(),
      children: []
    }
    this.folderData.push(newNode)
    this.showForm= false;
    this.rootFolderDataForm.reset();
  }

}
