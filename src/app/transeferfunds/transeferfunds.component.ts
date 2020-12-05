import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-transeferfunds',
  templateUrl: './transeferfunds.component.html',
  styleUrls: ['./transeferfunds.component.css']
})
export class TranseferfundsComponent implements OnInit {
  selected: number;
  beneficiaries:any;
  message: Object;
  search3:any;

  constructor(private route :Router,private service:BankService) { }

  ngOnInit() {
    this.getBeneficiary();
  }

  getBeneficiary(){
    let resp= this.service.getAllBeneficiary();
    resp.subscribe((data)=>{
      this.beneficiaries=data['data']});
  }
  onDelete(beneficiaryId){
    let resp= this.service.deleteBenefeciary(beneficiaryId);
    resp.subscribe((data)=>{
      this.message=data
      this.getBeneficiary()
     });
     
    }
      


  topay(beneficiaryId){
    this.route.navigate(['paytobeneficiery',beneficiaryId])
   }

  }

