import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-mytransactions',
  templateUrl: './mytransactions.component.html',
  styleUrls: ['./mytransactions.component.css']
})
export class MytransactionsComponent implements OnInit {

  Transactions:any;
  cust1: any;
  search2:any;
  constructor(private route:Router,private activatedRoute:ActivatedRoute,private service:BankService) { }

  ngOnInit() {
    
    let cust=JSON.parse(localStorage.getItem('user'));
    var cust1=cust['customerId']
    
    this.getTransactions(cust1);
    
   
  }
  

  

  getTransactions(customer_id){
    let resp= this.service.getTransactionbyId(customer_id);
    resp.subscribe((data)=>{
      this.Transactions=data['data']});

 
  }
 


}
