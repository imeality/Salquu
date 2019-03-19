import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';
import {MatDialog} from '@angular/material'
import {Router} from '@angular/router';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  model:any[];
  submitted =false;

  // empMail: string;
  // password: string;
  

  constructor( private formBuilder:FormBuilder,private api:ApiService,private router: Router) { }
  

  ngOnInit() {
    this.loginform = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

   get f(){
     return this.loginform.controls;
   }
  

   onSubmit(){
     this.submitted = true;

     this.model=[{username: this.f.username.value},
      {password: this.f.password.value}]
       
        
       this.api.getLogin(this.model)

        .subscribe(result => {
             
              localStorage.setItem('access_token', result.token);
             // console.log(localStorage.getItem('access_token'));
                  this.router.navigate(["dashboard"]);
                
                 
         },
         error =>{
           if(error.status==401){
                  alert('username pass invalid');
           }else{
             alert('opps try again');
           }
          
         
          }
          );
      
       
      
        
       
    

    if(this.loginform.valid){
      
    }else{
      alert(" form not valid");
    }
   }

 
}
