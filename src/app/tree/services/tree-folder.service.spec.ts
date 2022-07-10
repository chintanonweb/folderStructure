import { TestBed } from '@angular/core/testing';

import { TreeFolderService } from './tree-folder.service';

describe('TreeFolderService', () => {
  let service: TreeFolderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreeFolderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
