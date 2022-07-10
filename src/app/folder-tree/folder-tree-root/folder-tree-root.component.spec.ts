import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderTreeRootComponent } from './folder-tree-root.component';

describe('FolderTreeRootComponent', () => {
  let component: FolderTreeRootComponent;
  let fixture: ComponentFixture<FolderTreeRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolderTreeRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderTreeRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
