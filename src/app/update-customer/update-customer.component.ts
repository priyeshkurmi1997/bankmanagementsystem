import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BankService } from '../bank.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  customerToUpdate:Customer=new Customer();

  customers: any;
  updatecustomer:FormGroup
  customerResponse: any;
  customerId:any
  cust: Object;


  constructor(private fb:FormBuilder,private route:Router,private service:BankService,private activatedRouter:ActivatedRoute ) { 
    this.activatedRouter.params.subscribe(id => {
      this.service.getCustomerbyId(id.id).subscribe(data => {
        console.log(data);
       // this.customerToUpdate = data['data'];
       this.customers = data;
        this.customerId=this.customerToUpdate['customerId'];
        console.log(this.customerToUpdate);
        this.updatecustomer = new FormGroup({
          id: new FormControl(this.customerToUpdate.id),
          firstname: new FormControl(this.customerToUpdate.firstname),
          lastname: new FormControl(this.customerToUpdate.lastname),
          mobileno: new FormControl(this.customerToUpdate.mobileno),
          dob: new FormControl(this.customerToUpdate.dob),
          emailId: new FormControl(this.customerToUpdate.emailId),
          address1: new FormControl(this.customerToUpdate.address1),
          adharno: new FormControl(this.customerToUpdate.adharno),
          accountno: new FormControl(this.customerToUpdate.accountno),
          pin: new FormControl(this.customerToUpdate.pin),
          balance: new FormControl(this.customerToUpdate.balance),
          branch: new FormControl(this.customerToUpdate.branch),
          username: new FormControl(this.customerToUpdate.username),
          password: new FormControl(this.customerToUpdate.password),
        });
      });
    });

  }

  onSubmit() {
    var data=this.updatecustomer.value;
    data["id"]=this.customerId
    this.service.modifyCustomer(data).subscribe(data => {
      this.customerResponse = data;
      
    });
  }

  back(){
    this.route.navigateByUrl('admindashboard')
  }

  ngOnInit() {
    this.updatecustomer=this.fb.group({
      firstname: this.fb.control('',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]),
      lastname: this.fb.control('',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]),
      date: this.fb.control('',[Validators.required]),
      adharno: this.fb.control('',[Validators.required,Validators.minLength(10)]),
      email: this.fb.control('',[Validators.required,Validators.email]),
      mobileno: this.fb.control('',[Validators.required,Validators.minLength(9),Validators.maxLength(10)]),
      address1: this.fb.control('',[Validators.required]),
      accountno: this.fb.control('',[Validators.required,Validators.minLength(5),Validators.maxLength(6)]),
      branch: this.fb.control('',[Validators.required]),
      balance: this.fb.control('',[Validators.required,Validators.maxLength(7)]),
      pin: this.fb.control('',[Validators.required,Validators.minLength(3),Validators.maxLength(4)]),
      username: this.fb.control('',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]),
      password: this.fb.control('',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
      
    })
  }

}
