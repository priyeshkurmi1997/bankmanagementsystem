import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BankService } from '../bank.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  addcustomer: any;
  customer :Customer=new Customer();
  message: any;

  constructor(private fb:FormBuilder,private service:BankService) { }

  ngOnInit() {
    this.addcustomer=this.fb.group({
      firstname: this.fb.control('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
      lastname: this.fb.control('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
      date: this.fb.control('',[Validators.required]),
      adharno: this.fb.control('',[Validators.required,Validators.minLength(10)]),
      email: this.fb.control('',[Validators.required,Validators.email]),
      mobileno: this.fb.control('',[Validators.required,Validators.minLength(9),Validators.maxLength(10),Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      address1: this.fb.control('',[Validators.required]),
      accountno: this.fb.control('',[Validators.required,Validators.minLength(5),Validators.maxLength(6)]),
      branch: this.fb.control('',[Validators.required]),
      role: this.fb.control('',[Validators.required]),
      balance: this.fb.control('',[Validators.required,Validators.maxLength(7)]),
      pin: this.fb.control('',[Validators.required,Validators.minLength(3),Validators.maxLength(4)]),
      username: this.fb.control('',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]),
      password: this.fb.control('',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
      gender:this.fb.control('',Validators.required)
    })
  }

  public onAddCustomer(){
    let resp=this.service.doAddCustomer(this.customer);
    resp.subscribe((data)=>this.message=data);
    alert("Customer Added Succefully...!!!")
  }

}
