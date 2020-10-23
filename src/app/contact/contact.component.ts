/* tslint:disable:typedef use-lifecycle-interface */
import {
  Component,
  OnDestroy,
  OnInit,
  OnChanges,
  DoCheck,
  AfterViewInit,
  AfterViewChecked,
  AfterContentChecked,
  AfterContentInit, Input, SimpleChanges
} from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  constructor() {}

  ngOnInit(): void {
  }

}
