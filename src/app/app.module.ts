import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { GingerDatePickerComponent } from './design/groups/ginger-date-picker/ginger-date-picker.component';
import { ListYearMonthComponent } from './design/elements/list-year-month/list-year-month.component';
import { ListCalendarDayComponent } from './design/elements/list-calendar-day/list-calendar-day.component';

@NgModule({
  declarations: [
    AppComponent,
    GingerDatePickerComponent,
    ListYearMonthComponent,
    ListCalendarDayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
