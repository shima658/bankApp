import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
 import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

    depositForm=this.fb.group({
      acno:['',[ Validators.required ]],
      pin:['',[ Validators.required ]],
      amt:['',[ Validators.required ]],
     })

     withdrawForm=this.fb.group({
      acno:['',[ Validators.required ]],
      pin:['',[ Validators.required ]],
      amt:['',[ Validators.required ]],
     });


 /* accountDetails= {
    1001:{name:"user1",acno:1001,pin:4333,password:"userone",balance:3000},
    1002:{name:"user2",acno:1002,pin:4683,password:"usertwo",balance:3000},
    1003:{name:"user3",acno:1003,pin:1234,password:"userthree",balance:3000},
    1004:{name:"user4",acno:1004,pin:9087,password:"userfour",balance:3000},
    1005:{name:"user5",acno:1005,pin:9983,password:"userfive",balance:3000}
 }*/
 name="";
  constructor(public dataService:DataService, private fb:FormBuilder) { 
    this.name = localStorage.getItem("name")
    }

  ngOnInit(): void {
  }

  getError(field){
    return(this.depositForm.get(field).touched||this.depositForm.get(field).dirty)&&this.depositForm.get(field).errors
  }
  


   deposit()
   {
      this.dataService.deposit(this.depositForm.value.acno,this.depositForm.value.pin,this.depositForm.value.amt)
      .subscribe((result:any)=>{

        alert(result.message);
        alert(result.balance);
       },result => {
         alert(result.error.message);
       })
       }
       
 

  withdraw()
{
    this.dataService.withdraw(this.withdrawForm.value.acno,this.withdrawForm.value.pin,this.withdrawForm.value.amt)
    .subscribe((result:any)=>{

     alert(result.message);
     alert(result.balance);
    },result => {
      alert(result.error.message);
    })
    }
  }
  // deposit()
  // {
  //   if(this.depositForm.valid){
  //     const result=this.dataService.deposit(this.depositForm.value.acno,this.depositForm.value.pin,this.depositForm.value.amt);
        
  //     if(result){
  //     alert("account has been credited");
  //     }
  // }
  // else{
  //   alert("Form is Invalid");
  // }
  // }
    

//  withdraw()
//  {
//    //if(this.withdrawForm.valid)
//   // {
//     const result=this.dataService.withdraw(this.withdrawForm.value.acno,this.withdrawForm.value.pin,this.withdrawForm.value.amt);
   
//     if(result.status==true){
//    alert(result.message);
//    alert(result.balance);
//   }
  
//  else{
//    alert(result.message);
//    alert(result.balance);

//  }
//  }
//  }
 
 
 