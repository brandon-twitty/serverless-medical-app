import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IntroComponent} from "./intro/intro.component";
import {ScheduleComponent} from "./schedule/schedule.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'qualify',
    pathMatch: 'full'
  },
  {
    path: 'qualify',
    component: IntroComponent,
    data: {title: 'Qualify'}
  },
  {
    path: 'schedule-appointment',
    component: ScheduleComponent,
    data: {title: 'Schedule Appointment'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
