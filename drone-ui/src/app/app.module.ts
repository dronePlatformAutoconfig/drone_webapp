import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StationComponent } from './station/station.component';
import { DroneComponent } from './drone/drone.component';
import { ActionsComponent } from './actions/actions.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ConnectionComponent } from './connection/connection.component';
import { ChargeComponent } from './charge/charge.component';
import { SubscriberComponent } from './subscriber/subscriber.component';
import { RoofComponent } from './roof/roof.component';
import { ChargeBarComponent } from './charge-bar/charge-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StationComponent,
    DroneComponent,
    ActionsComponent,
    ConnectionComponent,
    ChargeComponent,
    SubscriberComponent,
    RoofComponent,
    ChargeBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
