import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-bank-transaction',
  templateUrl: './bank-transaction.component.html',
  styleUrls: ['./bank-transaction.component.css']
})
export class BankTransactionComponent implements OnInit {
  Transactions:any;
  search1:any;
  constructor(private route:Router,private service:BankService) { }

  ngOnInit() {
    this.getTransaction();
  }

  getTransaction(){
    let resp= this.service.getAllTransactions();
    resp.subscribe((data)=>{
      this.Transactions=data['data']});

 
  }

}
