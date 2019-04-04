import { Component, OnInit,ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import { Observable, Subscription, interval  } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private future: Date;
  private futureString: string;
  private diff: number;
  private $counter: Observable<number>;
  private subscription: Subscription;
  private message: string;
  constructor(private router: Router,private elm: ElementRef) { 
    this.futureString = elm.nativeElement.getAttribute('inputDate');
   }
   
  
    //data = JSON.parse(localStorage.getItem('data'));
     data = JSON.parse(localStorage.getItem('data'))
    

  ngOnInit() {
    
      console.dir(this.data);
  }
  logout(){
    localStorage.removeItem('access_token');
    localStorage.removeItem('data');
     // localStorage.clear(); 
    this.router.navigate([""]);
    
 }
}
