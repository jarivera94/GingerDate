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

    console.log('year: ' + year);
    console.log('month: ' + month);

    const daysInMont = this.getDaysInMonth(year, month);
    this.datesOfMonth = this.getDates(year, month , daysInMont);
    return this.datesOfMonth;
  }

  public getDates(year: number, month: number, daysInMont: number) {

    let datesOfWeek = new Array();
    const datesOfMonth = new Array();

    for (let day = 1; day <= daysInMont; day++) {

      const dateOfDay = new Date(year, (month - 1), day);
      if (day === 1 && dateOfDay.getDay() !== 0) {

        for (let index = 0; index < dateOfDay.getDay(); index++) {

          datesOfWeek.push({'dateOfDay': '', 'nameOfDay': this.days[index], 'day': ''});
        }
      }

      datesOfWeek.push({'dateOfDay': dateOfDay, 'nameOfDay': this.days[dateOfDay.getDay()], 'day': day});

      if (datesOfWeek.length === 7 || (day === daysInMont)) {

        datesOfMonth.push(datesOfWeek);
        datesOfWeek = new Array();
      }
    }

    return datesOfMonth;
  }
}
