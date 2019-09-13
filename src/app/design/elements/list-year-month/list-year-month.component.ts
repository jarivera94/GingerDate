import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { YearMonthEnum } from 'src/app/core/enums/year-month.enum';

@Component({
  selector: 'app-list-year-month',
  templateUrl: './list-year-month.component.html',
  styleUrls: ['./list-year-month.component.scss']
})
export class ListYearMonthComponent implements OnInit {

  @Input() title: string;
  @Input() listItems: any;
  @Input() YearMonth: YearMonthEnum;
  @Output() selectEvent = new EventEmitter<any>();

  columnClass: string;

  constructor() {

    this.columnClass = 'd-flex justify-content-center ';

    switch (this.YearMonth) {
      case YearMonthEnum.YEAR:

        this.columnClass += 'col-md-2';
        break;
      case YearMonthEnum.MONTH:

        this.columnClass += 'col-md-4';
        break;
      default:

        this.columnClass += 'col-md-12';
        break;
    }
  }

  ngOnInit() {
  }

  select(item: any) {

    this.selectEvent.emit(item);
  }
}
