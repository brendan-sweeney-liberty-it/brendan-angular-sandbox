import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WorkshopListComponent } from './workshop-list/workshop-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, WorkshopListComponent, WelcomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
