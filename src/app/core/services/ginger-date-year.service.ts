import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GingerDateYearService {

  private initYear = 1950;
  private limitYear = 2050;

  constructor() { }

  public getYears(): number[] {

    const years = new Array();

    for (let i = this.initYear ; i <= this.limitYear ; i++) {

      years.push(i);
    }

    return years;
  }
}
