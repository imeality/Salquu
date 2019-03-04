import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.css']
})
export class TodoappComponent implements OnInit {
  
   todoArray=[];
  constructor() { }

  ngOnInit() {
  }
  
  addTodo(value){
    if(value == ""){
      alert("please insert value");
    }else{
    this.todoArray.push(value);
  
    
    }
  }
 

  deleteItem(todo){
      for(let i=0; i<=this.todoArray.length;i++){
        if(todo == this.todoArray[i]){
                 this.todoArray.splice(i,1);
        }

      }
  }

  


}
