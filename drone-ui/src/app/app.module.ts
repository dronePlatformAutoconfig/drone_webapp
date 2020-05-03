import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StationComponent } from './station/station.component';
import { DroneComponent } from './drone/drone.component';
import { ActionsComponent } from './actions/actions.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ConnectionComponent } from './connection/connection.component';
import { ChargeComponent } from './charge/charge.component';
import { SubscriberComponent } from './subscriber/subscriber.component';

import { CenterComponent } from './center/center.component';
import { RoofComponent } from './roof/roof.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AuthGuard} from './auth.guard';
import { LoginComponent } from './login/login.component';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

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
    CenterComponent,
    RoofComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    AmplifyUIAngularModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
