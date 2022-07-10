import { FolderTreeComponent } from './folder-tree/folder-tree.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreeRootComponent } from './tree/tree-root/tree-root.component';

const routes: Routes = [
  {
    path :'',component:FolderTreeComponent},
  {
    path :'tree',
    redirectTo:'tree',
    pathMatch: 'full'
  },
  {
    path : 'tree',
    component : TreeRootComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
