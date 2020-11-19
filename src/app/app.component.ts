import {Component, Input} from '@angular/core';
import { MyserviceService } from './home/nav/myservice.service';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  todaydate;
  constructor(private myservice: MyserviceService, private authService: AuthService,
              private router: Router ) {}

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();



  }
}
