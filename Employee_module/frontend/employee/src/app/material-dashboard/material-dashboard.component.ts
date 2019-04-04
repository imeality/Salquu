import { Component } from '@angular/core';

import {Router} from '@angular/router';


@Component({
  selector: 'app-material-dashboard',
  templateUrl: './material-dashboard.component.html',
  styleUrls: ['./material-dashboard.component.css']
})
export class MaterialDashboardComponent {
  
  constructor(private router: Router) {}


  ngOnInit() {
       
    if(localStorage.getItem('access_token')!==null){
     
      return true;
    
    }
    else{  

    this.router.navigate(['']);
    return false;
    }
    
    
  }
 
  
}
