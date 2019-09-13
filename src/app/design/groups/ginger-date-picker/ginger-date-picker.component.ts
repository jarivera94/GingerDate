import { Component, OnInit, Input } from '@angular/core';

import { YearMonthEnum } from 'src/app/core/enums/year-month.enum';
import { GingerDateYearService } from 'src/app/core/services/ginger-date-year.service';
import { GingerDateMonthService } from 'src/app/core/services/ginger-date-month.service';
import { GingerDateDayService } from 'src/app/core/services/ginger-date-day.service';

@Component({
  selector: 'app-ginger-date-picker',
  templateUrl: './ginger-date-picker.component.html',
  styleUrls: ['./ginger-date-picker.component.scss']
})
export class GingerDatePickerComponent implements OnInit {

  @Input() title: string;

  yearMonthEnum = YearMonthEnum;

  year: any;
  month: any;
  day: any;

  txtYear: any;
  txtMonth: any;
  txtDay: any;

  constructor(
    private gingerDateYearService: GingerDateYearService,
    private gingerDateMonthService: GingerDateMonthService,
    private gingerDateDayService: GingerDateDayService) { }

  ngOnInit() {

    this.getYear();
    this.getMonth();
    this.getDay();
  }

  getYear() {

    this.year = this.gingerDateYearService.getYears();
    console.log(this.year);
  }

  getMonth() {

    this.month = this.gingerDateMonthService.getMonths();
    console.log(this.month);
  }

  getDay() {

  }

  selectYear(event: any) {

    this.txtYear = event;
  }

  selectMonth(event: any) {

    this.txtMonth = event.monthKeyAcronym;
  }
}
