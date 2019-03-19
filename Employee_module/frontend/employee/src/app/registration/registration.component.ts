import { Component, OnInit } from '@angular/core';
import {ApiService } from '../api.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  model:any[];
  submitted = false;
  constructor(private api:ApiService) { }

  ngOnInit() {
  }

  get f(){
    return;
  }
}
