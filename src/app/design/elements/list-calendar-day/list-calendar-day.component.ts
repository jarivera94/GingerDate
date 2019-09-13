import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-list-calendar-day',
  templateUrl: './list-calendar-day.component.html',
  styleUrls: ['./list-calendar-day.component.scss']
})
export class ListCalendarDayComponent implements OnInit {

  @Input() title: string;
  @Input() subTitle: string;
  @Output() selectEvent = new EventEmitter<any>();

  month: any;

  constructor() { }

  ngOnInit() {
  }

  setCalendar(month: any) {

    this.month = month;
  }

  select(item: any) {

    this.selectEvent.emit(item);
  }
}
