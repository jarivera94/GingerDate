import { Injectable } from '@angular/core';
import { Ginger } from '../interfaces/ginger.interface';

@Injectable({
  providedIn: 'root'
})
export class GingerParentService {

  listGinger: Array<Ginger>;

  constructor() {

    this.listGinger = new Array<Ginger>();
  }

  addGinger(ginger: Ginger) {

    this.listGinger.push(ginger);

    console.log(this.listGinger);
  }

  addGingerDate(gingerName: string, gingerDate: Date, gingerDateFather: Date): boolean {

    let response: boolean;

    this.listGinger.forEach((item) => {

      if (item.name === gingerName) {

        if (item.nameFather !== undefined) {

          console.log(gingerDateFather);
          console.log(gingerDateFather.getTime());
          console.log(gingerDate.getTime());
          console.log(gingerDateFather.getTime() < gingerDate.getTime());
          console.log(gingerDateFather.getTime() > gingerDate.getTime());

          if (gingerDateFather.getTime() > gingerDate.getTime()) {

            response = false;
          } else {

            item.date = gingerDate;
            response = true;
          }

          return false;
        } else {

          item.date = gingerDate;
          response = true;

          return true;
        }
      }
    });

    return response;
  }

  getDateFather(gingerName: string): Date {

    let nameFather: string;
    let dateFather: Date;

    this.listGinger.forEach((item) => {

      if (item.name === gingerName) {

        nameFather = item.nameFather;

        return false;
      }
    });

    this.listGinger.forEach((item) => {

      if (item.name === nameFather) {

        dateFather = item.date;
      }
    });

    return dateFather;
  }
}
