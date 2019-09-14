import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { YearMonthEnum } from 'src/app/core/enums/year-month.enum';
import { GingerDateYearService } from 'src/app/core/services/ginger-date-year.service';
import { GingerDateMonthService } from 'src/app/core/services/ginger-date-month.service';
import { GingerDateDayService } from 'src/app/core/services/ginger-date-day.service';
import { ListCalendarDayComponent } from '../../elements/list-calendar-day/list-calendar-day.component';
import { GingerParentService } from 'src/app/core/services/ginger-parent.service';

@Component({
  selector: 'app-ginger-date-picker',
  templateUrl: './ginger-date-picker.component.html',
  styleUrls: ['./ginger-date-picker.component.scss']
})
export class GingerDatePickerComponent implements OnInit {

  @Input() title: string;
  @Input() gingerRange: boolean;
  @Input() gingerName: string;
  @Input() gingerNameFather: string;
  @ViewChild('listDay') listDay: ListCalendarDayComponent;

  yearMonthEnum = YearMonthEnum;

  listElement: number;
  year: any;
  month: any;
  day: any;

  txtYear: string;
  txtMonth: string;
  txtDay: string;

  valMonth: any;
  valDate: any;

  format: 'dd/MM/yyyy';
  constructor(
    private gingerParentService: GingerParentService,
    private gingerDateYearService: GingerDateYearService,
    private gingerDateMonthService: GingerDateMonthService,
    private gingerDateDayService: GingerDateDayService) { }

  ngOnInit() {

    if (this.gingerRange) {
      this.gingerParentService.addGinger({
        name: this.gingerName,
        nameFather: this.gingerNameFather,
      });
    }

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

    if (this.txtYear !== '' && this.txtMonth !== '') {

      this.listDay.setCalendar(this.gingerDateDayService.getDatesOfMonth(+this.txtYear, +this.valMonth));
    }
  }

  selectYear(event: any) {

    this.txtYear = event;
    this.listElement = 0;

    this.getDay();
  }

  selectMonth(event: any) {

    this.txtMonth = event.monthKeyAcronym;
    this.valMonth = event.monthKey;
    this.listElement = 0;

    this.getDay();
  }

  selectDay(event: any) {

    this.txtDay = event.day;
    this.valDate = event.dateOfDay;
    this.listElement = 0;

    if (this.gingerRange) {
      if (!this.gingerParentService.addGingerDate(this.gingerName, this.valDate, this.gingerParentService.getDateFather(this.gingerName))) {

        this.txtYear = '';
        this.txtMonth = '';
        this.txtDay = '';
      }
    }
  }

  showList(listSelect: number) {

    this.listElement = listSelect;
  }
}
