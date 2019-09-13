import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GingerDateDayService {

  private datesOfMonth: any[];
  private days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
  constructor() { }

  public getDaysInMonth(year: number, month: number): number {
    return new Date(year, month, 0).getDate();
  }
  public getDatesOfMonth(year: number, month: number) {
    const daysInMont = this.getDaysInMonth(year, month);
    this.datesOfMonth = this.getDates(year, month , daysInMont);
    console.log(this.datesOfMonth);
  }
  public getDates(year: number, month: number, daysInMont: number) {
    const datesOfMonth = new Array();
    for (let day = 1; day <= daysInMont; day++) {
      const dateOfDay = new Date(year, (month - 1), day);
      datesOfMonth.push({'dateOfDay': dateOfDay, 'nameOfDay': this.days[dateOfDay.getDay()]});
    }
    return datesOfMonth;
  }
}
