import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
import {TodoappComponent} from './todoapp/todoapp.component';
import {ClockComponent } from './clock/clock.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {CalendarpageComponent} from './calendarpage/calendarpage.component';
import {ProjectSearchComponent} from './project-search/project-search.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { MaterialDashboardComponent} from './material-dashboard/material-dashboard.component';
import { HeaderComponent} from './header/header.component';
import { FooterComponent} from './footer/footer.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path: '' , component:LoginComponent},
  {path: 'todoapp',component:TodoappComponent},
  {path: 'clock', component:ClockComponent},
  {path: 'sidebar',component:SidebarComponent},
  {path: 'calendar', component:CalendarpageComponent},
  {path: 'projectSearch' , component:ProjectSearchComponent },
  
  {path: 'dashboard' , component:MaterialDashboardComponent},
  {path:'header' , component:HeaderComponent},
  {path:'footer' , component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
