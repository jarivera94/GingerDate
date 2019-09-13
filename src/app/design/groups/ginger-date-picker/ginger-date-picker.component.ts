import { Component, OnInit, Input } from '@angular/core';

import { YearMonthEnum } from 'src/app/core/enums/year-month.enum';

@Component({
  selector: 'app-ginger-date-picker',
  templateUrl: './ginger-date-picker.component.html',
  styleUrls: ['./ginger-date-picker.component.scss']
})
export class GingerDatePickerComponent implements OnInit {

  @Input() title: string;

  yearMonthEnum = YearMonthEnum;

  year: any[];
  month: any;
  day: any;

  constructor() { }

  ngOnInit() {
  }
}
