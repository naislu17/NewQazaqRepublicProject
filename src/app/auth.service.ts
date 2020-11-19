
import { Injectable } from '@angular/core';
import {of} from 'rxjs';


@Injectable()
export class AuthService {

  private isloggedIn: boolean;
  private userName: string;

  constructor() {
    this.isloggedIn = false;
  }

  // tslint:disable-next-line:typedef
  login(username: string, password: string) {

    // Assuming users are provided the correct credentials.
    // In real app you will query the database to verify.
    this.isloggedIn = true;
    this.userName = username;
    return of(this.isloggedIn);
  }

  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }

  isAdminUser(): boolean {
    // tslint:disable-next-line:triple-equals
    if (this.userName == 'Admin') {
      return true;
    }
    return false;
  }



}
