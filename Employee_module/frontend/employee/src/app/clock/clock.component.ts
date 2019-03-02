import { Component, OnInit } from '@angular/core';
import { ITimer} from './itimer';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  public counter=0;
  public minute:number;
  public timer_is_on = 0;
public timer: any;

  constructor() { }

  ngOnInit() {
   //this.start();
  }
 
  start() {
    
    this.minute = 0;
     window.clearInterval(this.timer);
     this.timer = setInterval(() => {
       this.counter++;
        if(this.counter == 60){
           this.minute++;
           this.counter = 0;
           this.timer_is_on=1;
           // window.clearInterval(this.timer);

            
            this.startFilling();
        }
     }, 1000);
}

stop(){
  clearTimeout(this.timer);
  this.timer_is_on=0;
}

startFilling() {
  console.log(true);
}


}
