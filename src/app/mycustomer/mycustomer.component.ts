import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { BankService } from '../bank.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-mycustomer',
  templateUrl: './mycustomer.component.html',
  styleUrls: ['./mycustomer.component.css']
})
export class MycustomerComponent implements OnInit {
  customerId: any;
  search:String;
  customer:Customer=new Customer();
  productResponce: any;
  message: Object;
  result:any;
  users: any;

  constructor(private route:Router,private activatedRoute:ActivatedRoute,private service:BankService) {}

  ngOnInit() {
    this.getCustomer();
    

  }
  
  getCustomer(){
    let resp= this.service.getAllCustomers();
    resp.subscribe((data)=>{
      this.users=data['data']});

 
  }

  update(customerId){
    this.route.navigate(['updatecust',customerId]);
  }

  onDelete(customerId){
   let resp= this.service.deleteCustomer(customerId);
   resp.subscribe((data)=>{
     this.message=data
     this.getCustomer()
    });
     

   
    }

    
 
  }

 
 


