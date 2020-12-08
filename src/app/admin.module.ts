import { NgModule } from '@angular/core';
import {HomeComponent} from './home/home.component';
import {AdminRoutingModule} from './admin-routing.module';
import {AppModule} from './app.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    AdminRoutingModule,
    AppModule,
    FormsModule,
  ],
  providers: [],
})
export class AdminModule { }
