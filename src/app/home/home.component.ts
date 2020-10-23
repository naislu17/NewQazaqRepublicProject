import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input()  name = '';
  myDate = new Date(2017, 4, 2);
  constructor() { }
  values = '';
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.values = 'Qazaq Republic';
  }
}
