import { Component, OnInit ,ViewChild} from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options} from 'fullcalendar';
import {CalendarService} from '../calendar.service';

@Component({
  selector: 'app-calendarpage',
  templateUrl: './calendarpage.component.html',
  styleUrls: ['./calendarpage.component.css']
})
export class CalendarpageComponent implements OnInit {

  
  calendarOptions: Options;
  displayEvent: any;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  constructor(private eventService:CalendarService) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe(data => {
      this.calendarOptions = {
        editable: true,
        eventLimit: false,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listMonth'
        },
       // editable:true
       events: data
        
      };
      
    });
    
  }
  clickButton(model: any) {
    this.displayEvent = model;
  }
  eventClick(model: any) {
    model = {
      event: {
        id: model.event.event_id,
        start: model.event.event_start_date,
        end: model.event.event_end_date,
        title: model.event.event_name,
        allDay: model.event.allDay
        // other params
      }
     
    }
    this.displayEvent = model;
  }
  // updateEvent(model: any) {
  //   model = {
  //     event: {
  //       id: model.event.id,
  //       start: model.event.start,
  //       end: model.event.end,
  //       title: model.event.title
  //       // other params
  //     },
  //     duration: {
  //       _data: model.duration._data
  //     }
  //   }
  //   this.displayEvent = model;
  // }


}
