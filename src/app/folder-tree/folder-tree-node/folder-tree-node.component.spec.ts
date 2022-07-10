import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderTreeNodeComponent } from './folder-tree-node.component';

describe('FolderTreeNodeComponent', () => {
  let component: FolderTreeNodeComponent;
  let fixture: ComponentFixture<FolderTreeNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolderTreeNodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderTreeNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
