import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; //   добавили home компонент и указали путь до него (перед этим создав его в консоле через ng generate component)
import { ActionsComponent } from './actions/actions.component';
import { DroneComponent } from './drone/drone.component';
import { StationComponent } from './station/station.component'; 


const routes: Routes = [
  { path: '', component: HomeComponent },              // добавляем компоненты в массив Routes
                                                       // Пустой путь значит , что этотк омпонент будет загружать по умолчанию при запуске приложения
  { path: 'station', component: StationComponent },

  { path: 'drone', component: DroneComponent },

  { path: 'actions', component: ActionsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
