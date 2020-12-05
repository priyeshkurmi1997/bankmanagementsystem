import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-paytobeneficiery',
  templateUrl: './paytobeneficiery.component.html',
  styleUrls: ['./paytobeneficiery.component.css']
})
export class PaytobeneficieryComponent implements OnInit {

  pin:any;
  data1:any;
  benefeciary:any;
  
  message: Object;
  constructor(private route:Router,private service:BankService,private activatedRouter:ActivatedRoute) { }
  
  paymentform = new FormGroup({
    b_accountno: new FormControl(),
    beneficiaryfirstName: new FormControl(),
    amount: new FormControl(),
    remarks:new  FormControl(),
    date : new FormControl(),
    pin:new FormControl()
    
  });


  ngOnInit() {
    this.getbeneficiary();
  }

  onAddTransaction(){
    let data={
      b_accountno:this.paymentform.value.b_accountno,
      beneficiaryfirstName:this.paymentform.value.beneficiaryfirstName,
      amount:this.paymentform.value.amount,
      remarks:this.paymentform.value.remarks,
      date:this.paymentform.value.date 
      
    }
    var cust=JSON.parse(localStorage.getItem('user'));
    var cust1=cust['customerId']
    data['customer_id']=cust1;
    this.data1=data;
    console.log(this.data1);
    console.log(data);
    let resp=this.service.addTransaction(this.data1);
    resp.subscribe((data)=>this.message=data);
    
    this.service.transeferMoney(data.amount,data.b_accountno,cust1).subscribe((data)=>this.message=data);
    console.log(data.amount,data.b_accountno,cust1);
    console.log(cust);
    alert("Trasansaction Succesfull...!!!!")
  }

getbeneficiary(){
  this.activatedRouter.params.subscribe(id => {
  this.service.getBeneficiarybyId(id.id).subscribe(data => {
    this.benefeciary=data;
  })
})




}



  back(){

    this.route.navigateByUrl('userdashboard');
  }

}
