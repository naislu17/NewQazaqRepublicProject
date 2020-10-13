import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {
  today: number = Date.now();
  constructor() { }

  ngOnInit(): void {
  }

}
