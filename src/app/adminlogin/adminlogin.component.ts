import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  loginform=new FormGroup({
    username:new FormControl(),
    password:new FormControl()
  });
  valid :boolean;
  isSubmited:boolean; 

  constructor(private fb: FormBuilder,private route:Router) { }

  admindashboard(){
    this.route.navigateByUrl('admindashboard')
  }

  ngOnInit() {
  }

  login() {
    console.log(this.loginform);
    if (this.loginform.value.username === 'admin' && this.loginform.value.password === 'admin') {
      this.valid = true;
      console.log(this.valid);
      localStorage.setItem('userDetails', JSON.stringify({ email: 'admin', password: 'admin' }));
      this.route.navigateByUrl('/admindashboard');
    } else {
      this.isSubmited = true;
      this.valid = false;
      setInterval(() => {
        this.isSubmited = false;
      }, 5000);
      this.valid = null;
    }
    //this.loginForm.reset();
  }

}
