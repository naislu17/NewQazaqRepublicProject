import {Component, Input} from '@angular/core';
import { MyserviceService } from './home/nav/myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  todaydate;
  constructor(private myservice: MyserviceService) {}
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();
  }
}
