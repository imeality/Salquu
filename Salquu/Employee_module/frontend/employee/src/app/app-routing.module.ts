import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
import {TodoappComponent} from './todoapp/todoapp.component';
import {ClockComponent } from './clock/clock.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {CalendarpageComponent} from './calendarpage/calendarpage.component';

const routes: Routes = [
  {path: '' , component:LoginComponent},
  {path: 'todoapp',component:TodoappComponent},
  {path: 'clock', component:ClockComponent},
  {path: 'sidebar',component:SidebarComponent},
  {path: 'calendar', component:CalendarpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
