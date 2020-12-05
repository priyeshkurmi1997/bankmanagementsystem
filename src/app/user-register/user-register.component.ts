import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registerform=new FormGroup({
    username:new FormControl(),
    password:new FormControl(),
    type:new FormControl()
  });
  valid :boolean;
  isSubmited:boolean; 

  constructor(private fb: FormBuilder,private route:Router) { }

  userRegister(){
    this.route.navigateByUrl('adminlogin')
  }



  ngOnInit() {
  }

}
