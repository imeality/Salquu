import { Component, OnInit } from '@angular/core';
import { ITimer} from './itimer';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  public counter=0;
  model:any[];
   minute:any;
   hours:any;
   second:any;
  public timer_is_on = 0;
public time: any;
CurrentTime: any;
public now: Date = new Date();

  constructor(private api:ApiService) { }

  ngOnInit() {
   //this.startTracker();
  }
 
  startTracker(){
    
           this.api.clockIn().subscribe(result=>{
             console.log(result);
           },error=>{
             console.log("error in tracker"+error);
           })
  }

  stopTracker(){
    
 
   
    this.api.clockOut().subscribe(result=>{
      console.log(result);
    },error=>{
      console.log("error in tracker"+error);
    })
  }
//   start() {
    
//     this.minute = 0;
//      window.clearInterval(this.timer);
//      this.timer = setInterval(() => {
//        this.counter++;
//         if(this.counter == 60){
//            this.minute++;
//            this.counter = 0;
//            this.timer_is_on=1;
//            // window.clearInterval(this.timer);

            
//             this.startFilling();
//         }
//      }, 1000);
// }

// stop(){
//   clearTimeout(this.timer);
//   this.timer_is_on=0;
// }

// startFilling() {
//   console.log(true);
// }


}
