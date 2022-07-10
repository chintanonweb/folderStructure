import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { ToastrService } from 'ngx-toastr';
import { TreeNodeModel } from 'src/app/shared/treenode.model';
import { TreeFolderService } from '../services/tree-folder.service';


@Component({
  selector: 'app-tree-root',
  templateUrl: './tree-root.component.html',
  styleUrls: ['./tree-root.component.scss'],
  providers: []
})

export class TreeRootComponent implements OnInit {

  // create json model 
  treeData!: TreeNodeModel[];

  // if isShowForm === true ?  show form : hide form
  isShowForm = false;

  // bydefault if of node id  is 0
  treeNodeId = 0;

  // for store children data
  rootTreeNode: any;

  // formgroup 
  treeDataForm!: FormGroup;

  ngOnInit(): void {
    this.initializationTreeForm();
    this.getTreeDataArrayObject();
    this.getTreeObjectOfChildNode();
    console.log(this.treeData)
  }

  // Form Controls
  initializationTreeForm() {
    this.treeDataForm = new FormGroup({
      fileName: new FormControl('', [Validators.required]),
      fileType: new FormControl('', [Validators.required])
    })
  }

  constructor(
    private treeFolderService: TreeFolderService,
    private toasterSvc: ToastrService) {

  }
  // add root node
  addRootNode() {
    //value of formcontrol name of treeDataForm
    const formValue = this.treeDataForm.value

    // if file name will  not available , then code will be  return from here

    if (!(this.treeDataForm.value.fileName).trim()) {
      this.toasterSvc.error("Please enter file or folder name")
      return;
    }

    // create json for current node

    const treeRootData = {
      name: formValue.fileName.trim(),
      type: formValue.fileType,
      id: this.treeNodeId++,
      children: []
    }


    // if this node will exist node , means this node will have a children , then add data into the children node , else add data as a new node 

    this.rootTreeNode ? this.rootTreeNode['children'].push(treeRootData) : this.treeData.push(treeRootData)
    this.treeFolderService.updateTreeStructureData(this.treeData);
    this.hideTreeForm();
    this.rootTreeNode = null;

  }

  // hide form when isShowForm = false and form value will be reset;
  hideTreeForm() {
    this.isShowForm = false;
    this.treeDataForm.get('fileName')?.setValue('')
  }

  // click event for show form and set the value of root folder

  addFolderOrFiles() {
    this.rootTreeNode = null;
    this.isShowForm = true;
    this.treeDataForm.controls['fileType'].setValue('folder');
  }

  // get updated treeData array objects using subscribe method 

  getTreeDataArrayObject() {
    this.treeFolderService.getTreeDataArrayObject().subscribe((res) => {
      this.treeData = res;
    });
  }


  // if any node want to add data into it's children, then get the value of this node  using subscribe method, so i can know that node is exist node
  getTreeObjectOfChildNode() {
    this.treeFolderService.getTreeObjectOfChildNode().subscribe((res) => {
      if (res) {
        this.addChildNode(res);
      }
    });
  }

  // add children data into the exist node , and bydefault set value of filetype is folder
  addChildNode(childrenData: any) {
    this.isShowForm = true;
    this.rootTreeNode = childrenData;
    this.treeDataForm.controls['fileType'].setValue('folder');
  }

}



