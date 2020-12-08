import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ItemComponent } from './item/item.component';
import { NavComponent } from './home/nav/nav.component';
import { FooterComponent } from './home/footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ItemPipe} from './item/item.pipe';
import { ImagesComponent } from './reviews/images/images.component';
import { FirstaddressComponent } from './contact/firstaddress/firstaddress.component';
import { SecondaddressComponent } from './contact/secondaddress/secondaddress.component';
import { TextComponent } from './home/text/text.component';
import { MyserviceService } from './home/nav/myservice.service';
import {LoggingService} from './services/logging.service';
import {AllserviceService} from './services/allservice.service';
import { LoginComponent } from './login/login.component';
import {AuthGuardService} from './auth-guard.servise';
import {AuthService} from './auth.service';
import {DeactivateGuard} from './deactivate-guard.service';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ReviewsComponent,
    ItemComponent,
    NavComponent,
    FooterComponent,
    ItemPipe,
    ImagesComponent,
    FirstaddressComponent,
    SecondaddressComponent,
    TextComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [MyserviceService, LoggingService,
    AllserviceService, AuthGuardService, AuthService, DeactivateGuard
    // tslint:disable-next-line:no-unused-expression
  ],
  exports: [
    TextComponent,
    NavComponent,
    FooterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
