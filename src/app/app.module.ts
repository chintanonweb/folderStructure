import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTreeModule } from '@angular/material/tree';
import { FolderTreeComponent } from './folder-tree/folder-tree.component';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import { TreeNodeComponent } from './tree/tree-node/tree-node.component';
import { TreeRootComponent } from './tree/tree-root/tree-root.component';
import { ToastrModule } from 'ngx-toastr';
import { FolderTreeRootComponent } from './folder-tree/folder-tree-root/folder-tree-root.component';
import { FolderTreeNodeComponent } from './folder-tree/folder-tree-node/folder-tree-node.component';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    FolderTreeComponent,
    TreeNodeComponent,
    TreeRootComponent,
    FolderTreeRootComponent,
    FolderTreeNodeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTreeModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatListModule,
    ReactiveFormsModule,
    MatMenuModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-top-right'
    })
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
