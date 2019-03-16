import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { HeaderInterceptor} from './interceptor/header-interceptor';
import {ApiService} from './api.service';
import { TodoappComponent } from './todoapp/todoapp.component';
import { ClockComponent } from './clock/clock.component';
import { RegistrationComponent } from './registration/registration.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FullCalendarModule } from 'ng-fullcalendar';
import { CalendarpageComponent } from './calendarpage/calendarpage.component';
import { ProjectSearchComponent } from './project-search/project-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule,MatCardModule,MatProgressSpinnerModule } from '@angular/material';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TodoappComponent,
    ClockComponent,
    RegistrationComponent,
    SidebarComponent,
    
    CalendarpageComponent,
    
    ProjectSearchComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule,
    HttpClientModule,
    MatInputModule, 
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule
  ],
  
  providers: [ApiService,{ provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
    HeaderInterceptor,],
  bootstrap: [AppComponent]
})
export class AppModule { }
