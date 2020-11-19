import { Injectable } from '@angular/core';

import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';


export interface DeactivateComponent {
  canExit: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class DeactivateGuard implements CanDeactivate<any> {
  // tslint:disable-next-line:ban-types
  component: Object;
  route: ActivatedRouteSnapshot;

  constructor() {
  }

  canDeactivate(component: DeactivateComponent,
                route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot,
                nextState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return component.canExit ? component.canExit() : true;
  }
}
