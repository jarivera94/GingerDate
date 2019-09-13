import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GingerDatePickerComponent } from './ginger-date-picker.component';

describe('GingerDatePickerComponent', () => {
  let component: GingerDatePickerComponent;
  let fixture: ComponentFixture<GingerDatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GingerDatePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GingerDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
