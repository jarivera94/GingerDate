import { Component, ViewChild } from '@angular/core';

import { GingerDatePickerComponent } from './design/groups/ginger-date-picker/ginger-date-picker.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  @ViewChild('gingerDatePicker') gingerDatePicker: GingerDatePickerComponent;

  constructor() { }
}
