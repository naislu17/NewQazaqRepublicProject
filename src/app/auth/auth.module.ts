
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from './auth.service';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from '../app-routing.module';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';




@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [LoginComponent,
    RegisterComponent
  ],
})
export class AuthModule {
  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['']);
  }
}
