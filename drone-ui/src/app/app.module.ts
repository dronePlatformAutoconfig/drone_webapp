import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChargeComponent } from './charge/charge.component';
import { SubscriberComponent } from './subscriber/subscriber.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AuthGuard} from './auth.guard';
import { LoginComponent } from './login/login.component';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { DronePanelComponent } from './drone-panel/drone-panel.component';
import { StationPanelComponent } from './station-panel/station-panel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VideoPanelComponent } from './video-panel/video-panel.component';
import { OverlayPanelComponent } from './overlay-panel/overlay-panel.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { UserNavComponent } from './user-nav/user-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChargeComponent,
    SubscriberComponent,
    LoginComponent,
    DronePanelComponent,
    StationPanelComponent,
    NavbarComponent,
    VideoPanelComponent,
    OverlayPanelComponent,
    UserNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatButtonModule,
    AmplifyUIAngularModule,
    MDBBootstrapModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
