import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

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

  

  constructor( private formBuilder:FormBuilder,private api:ApiService) { }
  

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
    
         console.log(this.model);
       this.api.getLogin(this.model)
        .subscribe(result => {
                    console.log(result);

                 
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
