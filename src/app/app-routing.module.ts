import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ItemComponent} from './item/item.component';
import {AuthGuardService} from './auth-guard.servise';
import {ReviewsComponent} from './reviews/reviews.component';
import {LoginComponent} from './login/login.component';
import {ContactComponent} from './contact/contact.component';
import {DeactivateGuard} from './deactivate-guard.service';
import {NgModule} from '@angular/core';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'item', component: ItemComponent},
  {path: 'reviews', component: ReviewsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'contacts', component: ContactComponent, canDeactivate: [DeactivateGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
