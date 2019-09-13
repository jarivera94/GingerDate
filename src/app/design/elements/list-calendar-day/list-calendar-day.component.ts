import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-list-calendar-day',
  templateUrl: './list-calendar-day.component.html',
  styleUrls: ['./list-calendar-day.component.scss']
})
export class ListCalendarDayComponent implements OnInit {

  @Input() title: string;
  @Input() subTitle: string;
  @Input() listItems: any;
  @Output() selectEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  select(item: any) {

    this.selectEvent.emit(item);
  }
}
