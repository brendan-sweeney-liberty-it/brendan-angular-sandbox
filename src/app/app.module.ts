import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { DataTablesModule } from 'angular-datatables';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WorkshopListComponent } from './workshop-list/workshop-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {AppRoutingModule} from './app-routing.module';
import { WorkshopService } from './workshop-list/workshop.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, DataTablesModule ],
  declarations: [ AppComponent, HelloComponent, WorkshopListComponent, WelcomeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [WorkshopService]
})
export class AppModule { }
