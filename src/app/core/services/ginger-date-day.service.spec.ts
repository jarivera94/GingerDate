import { TestBed } from '@angular/core/testing';

import { GingerDateDayService } from './ginger-date-day.service';

describe('GingerDateDayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GingerDateDayService = TestBed.get(GingerDateDayService);
    expect(service).toBeTruthy();
  });
});
