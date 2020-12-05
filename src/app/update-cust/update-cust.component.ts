import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BankService } from '../bank.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-update-cust',
  templateUrl: './update-cust.component.html',
  styleUrls: ['./update-cust.component.css']
})
export class UpdateCustComponent implements OnInit {
   customers:any 
   customerToUpdate:Customer=new Customer();
  customerId: any;
  customerResponse: Object;

  constructor(private route:Router,private service:BankService,private activatedRouter:ActivatedRoute) {
    this.activatedRouter.params.subscribe(id => {
      this.service.getCustomerbyId(id.id).subscribe(data => {
        console.log(data);
       // this.customerToUpdate = data['data'];
       this.customers = data['data'];
        this.customerId=id.id;
        console.log(this.customerToUpdate);
        this.updatecustomer = new FormGroup({
          customerId: new FormControl(this.customerToUpdate.id),
          firstname: new FormControl(this.customerToUpdate.firstname),
          lastname: new FormControl(this.customerToUpdate.lastname),
          mobileno: new FormControl(this.customerToUpdate.mobileno),
          dob: new FormControl(this.customerToUpdate.dob),
          gender: new FormControl(this.customerToUpdate.gender),
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
  updatecustomer = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    branch: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    dob: new FormControl(),
    pin: new FormControl(),
    emailId: new FormControl(),
    address1: new FormControl(),
    balance: new FormControl(),
    mobileno: new FormControl(),
    accountno: new FormControl(),
    gender: new FormControl(),
    adharno: new FormControl(),
    
  });


  ngOnInit() {
  }
  
  
  onSubmit() {
    var data=this.updatecustomer.value;
    data["customerId"]=this.customerId
    this.service.modifyCustomer(data).subscribe(data => {
      this.customerResponse = data;
      alert("Customer Updated Succesfully")
      
    });
  }



  back(){
    this.route.navigateByUrl('admindashboard')
  }

}
