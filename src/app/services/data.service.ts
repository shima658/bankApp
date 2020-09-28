import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const options = {
  withCredentials: true
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  accountDetails= {
    1001:{name:"user1",acno:1001,pin:4333,password:"userone",balance:3000,transactions:[]},
    1002:{name:"user2",acno:1002,pin:4683,password:"usertwo",balance:3000,transactions:[]},
    1003:{name:"user3",acno:1003,pin:1234,password:"userthree",balance:3000,transactions:[]},
    1004:{name:"user4",acno:1004,pin:9087,password:"userfour",balance:3000,transactions:[]},
    1005:{name:"user5",acno:1005,pin:9983,password:"userfive",balance:3000,transactions:[]}

}

  currentUser;

  constructor(private http:HttpClient) { 
    this.getDetails();
  }


   saveDetails(){
     localStorage.setItem("accountDetails", JSON.stringify(this.accountDetails));

     if(this.currentUser){
       localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
     }
   }

   getTransactions(){
     return this.http.get("http://localhost:3000/transactions", options);
    // return this.accountDetails[this.currentUser.acno].transactions;
   }
 
  deleteTransaction(id){
    return this.http.delete("http://localhost:3000/transactions/"+id, options);
  }


   getDetails(){
     if(localStorage.getItem("accountDetails")){
      this.accountDetails = JSON.parse(localStorage.getItem("accountDetails"));
     }
     if(localStorage.getItem("currentUser")){
       this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
     }
   }

 
    // if(acno in this.accountDetails){
    //   alert("Account number already exists.Please login");
    //   return false;
    // }
   // this.accountDetails[acno]={

     register(name,acno,pin,password){
      const data = {
      name,
      acno,
      pin,
      password,
      balance:0,
      transactions:[]
    }
   return  this.http.post("http://localhost:3000/register", data);
  }
    // this.saveDetails();
    // return true;
  

  login(acno1,password){
    var acno=parseInt(acno1);
    const data = {
      acno,
      password
    }
    return this.http.post("http://localhost:3000/login", data,options);
  }

  //   var acno=parseInt(acno1);
  //   var data=this.accountDetails;
  //   if(acno in data)
  //   {
  //     var pwd=data[acno].password
  //     if(pwd==password){
  //       this.currentUser=data[acno];
  //       this.saveDetails();
  //       return true;
  //     }
  //   }
  // }

 // deposit(acno1,pinno,amt){
  //   var acno=parseInt(acno1);
  //   var amount=parseInt(amt);
  deposit(acno1,pinno,amt){
    const data = {
      acno1,
      pinno,
      amt
    };
    return this.http.post("http://localhost:3000/deposit", data,options);
  }

  //   var acno=parseInt(acno1);
  //   var amount=parseInt(amt);
  //   var data=this.accountDetails;

  //   if(acno in data){
  //     let mpin=data[acno].pin;
  //     if(pinno==mpin){
  //       data[acno].balance+=amount;

  //       alert(data[acno].balance)
  //       data[acno].transactions.push({
  //         amount:amt,
  //         type:'credit'
  //       })
  //       this.saveDetails();
  //       this.currentUser=data[acno];
  //       return {
  //         status:true,
  //         message:'account has been credited',
  //         balance:data[acno].balance
  //       }
  //     }
  //   }
  //   else{
  //     return{
  //       status:false,
  //       message:'Incorrect Account Details'
        
  //     }
  //   }
  // }

  withdraw(acno1,pinno,amt){
    const data = {
      acno1,
      pinno,
      amt
    };
    return this.http.post("http://localhost:3000/withdraw", data,options);
  }
}
//     var acno=parseInt(acno1);
//     var amount=parseInt(amt);
//     var data=this.accountDetails;
//     if(acno in data){
//       let mpin=data[acno].pin;
//     if(data[acno].balance<parseInt(amt)){
//       return{
//         status:false,
//         message:'Insufficient balance',
//         balance:data[acno].balance
//       }
//     }

//      else if(pinno==mpin){
//         data[acno].balance -=parseInt(amt);
//         data[acno].transactions.push({
//           amount:amt,
//           type:'debit'
//         })
//         this.saveDetails();
//         this.currentUser=data[acno];
//         return {
//           status:true,
//           message:'account has been debited',
//           balance:data[acno].balance
//         }
//       }
//     }
//     else{
//       return{
//         status:false,
//         message:'Incorrect Account Details'
//       }
//     }
//   }
// }
 