import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { BankService } from '../bank.service';
import { Beneficiary } from '../beneficiary';


@Component({
  selector: 'app-addbeneficiery',
  templateUrl: './addbeneficiery.component.html',
  styleUrls: ['./addbeneficiery.component.css']
})
export class AddbeneficieryComponent implements OnInit {
   
  benef: Beneficiary=new Beneficiary();
  addbeneficiary:any;
  message: any;
  beneficiary: any;
  constructor(private route:Router,private service:BankService) { }

  beneficiaryForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    mobileno: new FormControl(),
    accountno: new FormControl(),
    email: new FormControl(),
  });

  ngOnInit() {
  }
  back(){

    this.route.navigateByUrl('userdashboard');
  }

  onAddBenef(){
    let data={
      beneficiaryfirstName:this.beneficiaryForm.value.firstname,
      beneficiarylastName:this.beneficiaryForm.value.lastname,
      b_emailid:this.beneficiaryForm.value.email,
      b_accountno:this.beneficiaryForm.value.accountno,
      mobileno:this.beneficiaryForm.value.mobileno,
      b_balance:0
    }
    let resp=this.service.doAddBeneficiary(data);
    resp.subscribe((data)=>this.message=data);
    alert("Beneficiary added succefully..!!!")
  }
  
}
