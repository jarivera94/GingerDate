import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { YearMonthEnum } from 'src/app/core/enums/year-month.enum';
import { GingerDateYearService } from 'src/app/core/services/ginger-date-year.service';
import { GingerDateMonthService } from 'src/app/core/services/ginger-date-month.service';
import { GingerDateDayService } from 'src/app/core/services/ginger-date-day.service';
import { ListCalendarDayComponent } from '../../elements/list-calendar-day/list-calendar-day.component';

@Component({
  selector: 'app-ginger-date-picker',
  templateUrl: './ginger-date-picker.component.html',
  styleUrls: ['./ginger-date-picker.component.scss']
})
export class GingerDatePickerComponent implements OnInit {

  @Input() title: string;
  @ViewChild('listDay') listDay: ListCalendarDayComponent;

  yearMonthEnum = YearMonthEnum;

  year: any;
  month: any;
  day: any;

  txtYear: any;
  txtMonth: any;
  txtDay: any;

  valMonth: any;
  valDate: any;

  constructor(
    private gingerDateYearService: GingerDateYearService,
    private gingerDateMonthService: GingerDateMonthService,
    private gingerDateDayService: GingerDateDayService) { }

  ngOnInit() {

    this.getYear();
    this.getMonth();
  }

  getYear() {

    this.year = this.gingerDateYearService.getYears();
  }

  getMonth() {

    this.month = this.gingerDateMonthService.getMonths();
  }

  getDay() {

    this.listDay.setCalendar(this.gingerDateDayService.getDatesOfMonth(this.txtYear, this.valMonth));
  }

  selectYear(event: any) {

    this.txtYear = event;
  }

  selectMonth(event: any) {

    this.txtMonth = event.monthKeyAcronym;
    this.valMonth = event.monthKey;
    this.getDay();
  }

  selectDay(event: any) {

    this.txtDay = event.day;
    this.valDate = event.dateOfDay;
  }
}
