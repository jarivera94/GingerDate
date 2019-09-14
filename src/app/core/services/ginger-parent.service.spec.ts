import { TestBed } from '@angular/core/testing';

import { GingerParentService } from './ginger-parent.service';

describe('GingerParentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GingerParentService = TestBed.get(GingerParentService);
    expect(service).toBeTruthy();
  });
});
