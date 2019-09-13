import { TestBed } from '@angular/core/testing';

import { GingerDateMonthService } from './ginger-date-month.service';

describe('GingerDateMonthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GingerDateMonthService = TestBed.get(GingerDateMonthService);
    expect(service).toBeTruthy();
  });
});
