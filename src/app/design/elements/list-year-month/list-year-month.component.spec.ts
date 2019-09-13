import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListYearMonthComponent } from './list-year-month.component';

describe('ListYearMonthComponent', () => {
  let component: ListYearMonthComponent;
  let fixture: ComponentFixture<ListYearMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListYearMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListYearMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
