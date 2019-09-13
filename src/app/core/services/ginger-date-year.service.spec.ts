import { TestBed } from '@angular/core/testing';

import { GingerDateYearService } from './ginger-date-year.service';

describe('GingerDateYearService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GingerDateYearService = TestBed.get(GingerDateYearService);
    expect(service).toBeTruthy();
  });
});
