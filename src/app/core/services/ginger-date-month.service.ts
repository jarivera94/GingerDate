import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GingerDateMonthService {

  private months: any[];
  constructor() {
    this.months = new Array();
    this.months.push({'monthKey': '01', 'monthName': 'Enero'});
    this.months.push({'monthKey': '02', 'monthName': 'Febrero'});
    this.months.push({'monthKey': '03', 'monthName': 'Marzo'});
    this.months.push({'monthKey': '04', 'monthName': 'Abril'});
    this.months.push({'monthKey': '05', 'monthName': 'Mayo'});
    this.months.push({'monthKey': '06', 'monthName': 'Junio'});
    this.months.push({'monthKey': '07', 'monthName': 'Julio'});
    this.months.push({'monthKey': '08', 'monthName': 'Agosto'});
    this.months.push({'monthKey': '09', 'monthName': 'Septiembre'});
    this.months.push({'monthKey': '10', 'monthName': 'Octubre'});
    this.months.push({'monthKey': '11', 'monthName': 'Noviembre'});
    this.months.push({'monthKey': '12', 'monthName': 'Diciembre'});
  }
  public getMonths(): any[] {
    return this.months;
  }
}
