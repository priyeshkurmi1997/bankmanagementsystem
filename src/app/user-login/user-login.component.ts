import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  userloginform =new FormGroup({
    username:new FormControl(),
    password:new FormControl()
  });
  valid :boolean;
  isSubmited:boolean;
  customerResponse: Object;

  constructor(private fb: FormBuilder,private route:Router,private service:BankService) { }

  ngOnInit() {
  }
  // userdashboard(){
  //   this.route.navigateByUrl('userdashboard')
  // }

   async userlogin(){
    let data=await this.service.getlogin(this.userloginform.value.username+"",this.userloginform.value.password+"").toPromise().catch(error=>{alert("Invalid Credentials")})
      this.customerResponse = data['data'];
      if(this.customerResponse['error']){
        console.log(this.customerResponse['error']);
        alert(this.customerResponse['error'])
      }
      else{
        localStorage.setItem('user',JSON.stringify(this.customerResponse));
      if(this.customerResponse['role']==="user"){
        this.valid=true;
        console.log(this.valid);
      
        this.route.navigateByUrl('userdashboard');
       }
       else{
         this.route.navigateByUrl('admindashboard');
       }
    }
    

  }


  // userlogin() {
  //   console.log(this.userloginform);
  //   if (this.userloginform.value.username === 'admin' && this.userloginform.value.password === 'admin') {
  //     this.valid = true;
  //     console.log(this.valid);
  //     localStorage.setItem('userDetails', JSON.stringify({ email: 'admin', password: 'admin' }));
  //     this.route.navigateByUrl('/userdashboard');
  //   } else {
  //     this.isSubmited = true;
  //     this.valid = false;
  //     setInterval(() => {
  //       this.isSubmited = false;
  //     }, 5000);
  //     this.valid = null;
  //   }
  //   //this.loginForm.reset();
  // }

}
