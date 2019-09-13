import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCalendarDayComponent } from './list-calendar-day.component';

describe('ListCalendarDayComponent', () => {
  let component: ListCalendarDayComponent;
  let fixture: ComponentFixture<ListCalendarDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCalendarDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCalendarDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
