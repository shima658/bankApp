import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService} from '../services/data.service';
import { FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
    loginForm=this.fb.group({
      acno:['1001',[Validators.required,Validators.pattern("^[0-9]*$") ]],
      pwd:['userone',[Validators.required]],
    });
  
//acno="";
//pwd="";
  constructor(private router:Router, 
  private dataService: DataService,
  private fb:FormBuilder) { } 

 ngOnInit(): void{

 }

 getError(field){
   return(this.loginForm.get(field).touched||this.loginForm.get(field).dirty)&&this.loginForm.get(field).errors
 }
 
    //acnoChange(event){
      //alert(event.target.value)
      //this.acno=event.target.value;
    //}
      //pwdChange(event){
      //alert(event.target.value)
      //this.pwd=event.target.value;
    //}
    
       login()
      {
        if(this.loginForm.valid){
          this.dataService.login(this.loginForm.value.acno,this.loginForm.value.pwd)
        .subscribe((data:any)=>{
            if(data){
              localStorage.setItem("name",data.name)
              alert('Login Succesful');
              this.router.navigateByUrl("dashboard");
            } else{
                   alert('Invalid Credentials');
                }
          },(data)=>{
            alert(data.error.message);
          })
          }else{
            alert('Form is invalid');
                  return;
          }
        }
      }
      //   const result=this.dataService.login(this.loginForm.value.acno,this.loginForm.value.pwd);

      //   if(result){
      //   alert('Login Succesful');
      //   this.router.navigateByUrl("dashboard");
      //   }
      //   else{
      //     alert('Invalid Credentials');
      //   }
      // }
      //   else{
      //     alert('Form is invalid');
      //      return;
      //    }  
      //   }
      // }