import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GingerDateMonthService {

  private months: any[];

  constructor() {

    this.months = new Array();
    this.months.push({'monthKey': '01', 'monthName': 'Enero' , 'monthKeyAcronym': 'Ene'});
    this.months.push({'monthKey': '02', 'monthName': 'Febrero', 'monthKeyAcronym': 'Feb'});
    this.months.push({'monthKey': '03', 'monthName': 'Marzo', 'monthKeyAcronym': 'Mar'});
    this.months.push({'monthKey': '04', 'monthName': 'Abril', 'monthKeyAcronym': 'Abr'});
    this.months.push({'monthKey': '05', 'monthName': 'Mayo', 'monthKeyAcronym': 'May'});
    this.months.push({'monthKey': '06', 'monthName': 'Junio', 'monthKeyAcronym': 'Jun'});
    this.months.push({'monthKey': '07', 'monthName': 'Julio', 'monthKeyAcronym': 'Jul'});
    this.months.push({'monthKey': '08', 'monthName': 'Agosto', 'monthKeyAcronym': 'Ago'});
    this.months.push({'monthKey': '09', 'monthName': 'Septiembre', 'monthKeyAcronym': 'Sep'});
    this.months.push({'monthKey': '10', 'monthName': 'Octubre', 'monthKeyAcronym': 'Oct'});
    this.months.push({'monthKey': '11', 'monthName': 'Noviembre', 'monthKeyAcronym': 'Nov'});
    this.months.push({'monthKey': '12', 'monthName': 'Diciembre', 'monthKeyAcronym': 'Dic'});
  }

  public getMonths(): any[] {

    return this.months;
  }
}
