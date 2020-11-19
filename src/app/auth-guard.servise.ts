import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Route} from '@angular/router';
import { AuthService } from './auth.service';


@Injectable()
export class AuthGuardService implements CanActivate,  CanLoad  {

  constructor(private router: Router, private authService: AuthService) {

  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean|UrlTree {

    if (!this.authService.isUserLoggedIn()) {
      alert('You can not to view this page. You are redirected to login page');

      this.router.navigate(['login'], { queryParams: { retUrl: route.url} });
      return false;

    }

    return true;
  }
  canLoad(route: Route): boolean {

    const url: string = route.path;
    console.log('Url:' + url);
    // tslint:disable-next-line:triple-equals
    if (url == 'admin') {
      alert('You are not authorised to visit this page');
      return false;
    }

    return true;
  }


}
