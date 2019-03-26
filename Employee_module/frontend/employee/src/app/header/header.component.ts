import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private router: Router) {  }

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
