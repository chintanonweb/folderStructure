import { Component, Input, OnInit } from '@angular/core';
import { TreeFolderService } from '../services/tree-folder.service';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss']
})
export class TreeNodeComponent implements OnInit {

  // get treeData from parents component
  @Input('treeData') treeData: any
  id: any;
  editMode: boolean = false;
  editNameId!: number;
  constructor(private treeFolderService: TreeFolderService) { }

  ngOnInit(): void {
   
  }

  // add children node 
  addchildrenNode(node: any) {
    this.treeFolderService.updatedChildrenNodeData(node);
  }

  // if children will be undefined , then parent node will be deleted, otherwise children node will be delete as well as number of children node length  also will delete

  deleteTreeNodes(index: number) {
    return this.treeData.children === undefined ? this.treeData.splice(index, 1) :
      this.treeData.children.splice(index, this.treeData.children.length)
  }


  // editChild(items: any, index: number, name: any) {
  //   debugger
  //   let item;
  //   for (let i = 0; i < items.length; i++) {
  //     item = items[i];
  //     if (item.id === index) {
  //       item.name = name;
  //       return;
  //     }
  //     if (item.children) {
  //       this.editChild(item.children, index, name);
  //     }
  //   }
  // }
  
  editChilds(event: any) {
    console.log(event);
  }
  // editChild(arr: any,index: number, name:any){
  //   console.log(index)
  //   if(arr.children.length  === 0)
  //   return;

  //   arr.children.filter((child:any) => {
  //     console.log(child.name);
  //     arr.children.push(
  //       {
  //         id: arr.children.id++,
  //         name: "asd 1",
  //         type: "folder",
  //         children: [],
  //       }
  //     )
  //     console.log(arr)
  //   });
  // }
}