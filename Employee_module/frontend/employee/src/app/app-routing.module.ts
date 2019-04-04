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
import {AppComponent } from './app.component';
import {RequestFormComponent} from './request-form/request-form.component';
import {ReportComponent} from './report/report.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path: '' , component:LoginComponent},
  {path: 'todoapp',component:TodoappComponent},
  {path: 'clock', component:ClockComponent},
  {path: 'sidebar',component:SidebarComponent},
 
  {path: 'projectSearch' , component:ProjectSearchComponent },
  {path: 'home' , component:AppComponent},
  {path: 'dashboard' , component:DashboardComponent,
  children: [
    { 
      path: '', 
      component: MaterialDashboardComponent
     },
    { 
      path: 'calendar', 
      component: CalendarpageComponent 
    },
    { 
      path: 'requestform', 
      component: RequestFormComponent
    },
    { 
      path: 'report', 
      component: ReportComponent
    }
    
  ]},
   
  {path:'header' , component:HeaderComponent},
  {path:'footer' , component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
