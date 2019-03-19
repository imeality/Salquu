import { Component, OnInit } from '@angular/core';
import {ApiService } from '../api.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
  constructor(private router: Router) { }

  ngOnInit() {
    
           
    if(localStorage.getItem('access_token')!==null){
      return true;
    
    }
      

    this.router.navigate(['']);
    return false;
   
    
    
  }

}
