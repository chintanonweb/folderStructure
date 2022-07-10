import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { TreeNodeModel } from '../shared/treenode.model';


@Component({
  selector: 'app-folder-tree',
  templateUrl: './folder-tree.component.html',
  styleUrls: ['./folder-tree.component.scss']
})

export class FolderTreeComponent implements OnInit {

  ngOnInit(): void {
  }
  constructor() { }

  folderData: TreeNodeModel[] = [
    {
      "name": "asd",
      "type": "folder",
      "id": 0,
      "children": [
        {
          "name": "asd",
          "type": "folder",
          "id": 1,
          "children": [
            {
              "name": "asdsdsad",
              "type": "folder",
              "id": 2,
              "children": [
                {
                  "name": "asdads",
                  "type": "folder",
                  "id": 3,
                  "children": [
                    {
                      "name": "asda",
                      "type": "file",
                      "id": 4,
                      "children": []
                    },
                    {
                      "name": "asdas",
                      "type": "file",
                      "id": 5,
                      "children": [],
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "asdads",
      "type": "folder",
      "id": 6,
      "children": [
        {
          "name": "asdasd",
          "type": "folder",
          "id": 8,
          "children": [
            {
              "name": "asdad",
              "type": "folder",
              "id": 9,
              "children": []
            }
          ]
        }
      ]
    },
    {
      "name": "asdsad",
      "type": "folder",
      "id": 7,
      "children": []
    }
  ];

}
