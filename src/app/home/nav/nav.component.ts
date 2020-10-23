import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {
  today: number = Date.now();
  todaydate;
  constructor(private myservice: MyserviceService) {}

  values = '';
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.values = 'Qazaq Republic';
    this.todaydate = this.myservice.showTodayDate();
  }

}
