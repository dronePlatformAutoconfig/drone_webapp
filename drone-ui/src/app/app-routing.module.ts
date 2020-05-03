import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActionsComponent } from './actions/actions.component';
import { DroneComponent } from './drone/drone.component';
import { StationComponent } from './station/station.component';
import {AuthGuard} from './auth.guard';
import {LoginComponent} from "./login/login.component";


const routes: Routes = [
  { path: '', component: HomeComponent},

  { path: 'login', component: LoginComponent},

  { path: 'station', component: StationComponent, canActivate: [AuthGuard]},

  { path: 'drone', component: DroneComponent,  canActivate: [AuthGuard]},

  { path: 'actions', component: ActionsComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
