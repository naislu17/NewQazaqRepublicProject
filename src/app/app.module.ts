import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ItemComponent } from './item/item.component';
import { NavComponent } from './home/nav/nav.component';
import { FooterComponent } from './home/footer/footer.component';
import {FormsModule} from '@angular/forms';
import {ItemPipe} from './item/item.pipe';
import { ImagesComponent } from './reviews/images/images.component';
import { FirstaddressComponent } from './contact/firstaddress/firstaddress.component';
import { SecondaddressComponent } from './contact/secondaddress/secondaddress.component';
import { TextComponent } from './home/text/text.component';
import { MyserviceService } from './home/nav/myservice.service';
import {LoggingService} from './services/logging.service';
import {AllserviceService} from './services/allservice.service';






const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'item', component: ItemComponent},
  {path: 'reviews', component: ReviewsComponent},
  {path: 'contacts', component: ContactComponent}
];



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
    TextComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [MyserviceService, LoggingService,
    AllserviceService
    // tslint:disable-next-line:no-unused-expression
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
