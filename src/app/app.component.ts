import { Component } from '@angular/core';
import {GingerDateYearService} from './core/services/ginger-date-year.service';
import {GingerDateMonthService} from './core/services/ginger-date-month.service';
import {GingerDateDayService} from './core/services/ginger-date-day.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'GingerDate';
  private years:  number[];
  private months: any[];
  private indexYear ;
  private indexMonth;
  constructor(
    private gingerDateYearService: GingerDateYearService,
    private gingerDateMonthService: GingerDateMonthService,
    private gingerDateDayService: GingerDateDayService
    ) {

  }

  public getYears() {
    this.years = this.gingerDateYearService.getYears();
    console.log(this.years);
  }
  public getMonths() {
    this.months = this.gingerDateMonthService.getMonths();
    console.log(this.months);
  }

  public getDaysInMonth() {
    console.log('getDaysInMonth::',this.gingerDateDayService.getDatesOfMonth(this.years[this.indexYear], this.months[this.indexMonth]['monthKey']));
  }
}
