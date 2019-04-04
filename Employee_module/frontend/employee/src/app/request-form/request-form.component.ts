import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import {ApiService} from '../api.service';
@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {
  public requestForm: FormGroup;
  submitted = false;
  model :any[];
  constructor(private api:ApiService,  private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.requestForm =this.formBuilder.group({
      title: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      startDate: new FormControl(new Date()),
      endDate: new FormControl(new Date()),
      leaveType: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      
    });
    
  }
  public hasError = (controlName: string, errorName: string) =>{
    return this.requestForm.controls[controlName].hasError(errorName);
  }
  get f(){
    return this.requestForm.controls;
  }
  submit() {
     this.submitted = true;
    this.model =[{title:this.f.title.value,leave_start_date:this.f.startDate.value,
    leave_end_date:this.f.endDate.value,leave_type:this.f.leaveType.value,reason:this.f.description.value}]
    console.log(this.model);
    
    this.api.request(this.model).subscribe(result=>{
        console.log(result);
        
    },error=>{
        console.log("error"+error);
    })
  }

 
    
     


 

}
