import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeRootComponent } from './tree-root.component';

describe('TreeRootComponent', () => {
  let component: TreeRootComponent;
  let fixture: ComponentFixture<TreeRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
