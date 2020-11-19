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
import {DeactivateComponent} from '../deactivate-guard.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, DeactivateComponent
{


  canExit(): boolean {

    if (confirm('Are you sure to exit without saving everything?')) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit(): void {
  }

}
