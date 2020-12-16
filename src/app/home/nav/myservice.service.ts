import { Injectable } from '@angular/core';
@Injectable()

export class MyserviceService {
  constructor() { }
  showTodayDate() {
    const ndate = new Date();
    return ndate;
  }
}
