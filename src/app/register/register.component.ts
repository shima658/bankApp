import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name="";
  acno="";
  pin="";
  pwd="";

registerForm=this.fb.group({

name:['',[Validators.required]],
acno:['',[Validators.required,Validators.minLength(3)]],
pwd:['',[Validators.required]],
pin:['',[Validators.required]],

});

  constructor(private dataservice:DataService,
    private router:Router,
    private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  getError(field){
    return (this.registerForm.get(field).touched||this.registerForm.get(field).dirty)&&this.registerForm.get(field).errors
  }

  register(){
    if(this.registerForm.valid){
      this.dataservice.register(this.registerForm.value.name,this.registerForm.value.acno,this.registerForm.value.pin,this.registerForm.value.pwd)
      .subscribe(data=>{
       if(data){
        alert("Successfully created account.Please login");
        this.router.navigateByUrl("");
       }
    },(data)=>{
         alert(data.error.message);
      })
    }else{
      alert("Form is invalid");
         }
        } 
      }
  //   if(this.registerForm.get('name').errors){
  //     alert("Name is invalid");
  //   }
  //   if(this.registerForm.valid){
  //   const result= this.dataservice.register(this.registerForm.value.name,this.registerForm.value.acno,this.registerForm.value.pwd,this.registerForm.value.pin); 
  //   if(result){
  //     alert("Successfully created account.Please login");
  //     this.router.navigateByUrl("");
  //   }
  // }else{
  //     alert("Form is invalid");
  //   }
  //   }
  //}