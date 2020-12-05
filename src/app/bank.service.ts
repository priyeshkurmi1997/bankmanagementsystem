import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankService {
    
  constructor(private http:HttpClient) { }
  public doPostnews(news){
    return this.http.post("http://localhost:8080/news/postnews",news,{responseType:'text' as 'json' });
  }

  public doAddCustomer(customer){
    return this.http.post("http://localhost:8080/customer",customer,{responseType:'text' as 'json' });
  }
  public doAddBeneficiary(benef){
    return this.http.post("http://localhost:8080/beneficiary",benef,{responseType:'text' as 'json'});
  }
   public getCustomerbyId(customerId){
     return this.http.get("http://localhost:8080/customer/CustomerId?customerId="+customerId);
   }
   public getTransactionbyId(customer_id){
     return this.http.get("http://localhost:8080/transaction/CustomerId?customer_id="+customer_id);
   }
   public modifyCustomer(customer){
     return this.http.put("http://localhost:8080/Customer",customer);
   }

   getAllCustomers(){
     return this.http.get("http://localhost:8080/customers");
   }
   getAllBeneficiary(){
     return this.http.get("http://localhost:8080/beneficiaries");
   }

   getAllNews(){
     return this.http.get("http://localhost:8080/news/news");
   }

   getlogin(username:String,password:String){
     return this.http.get("http://localhost:8080/customer/Username-Password?username="+username+"&password="+password);
   }
     
   deleteCustomer(customerId){
     return this.http.delete("http://localhost:8080/customer/CustomerId?customerId="+customerId)
   }
   deleteBenefeciary(benefId){
     return this.http.delete("http://localhost:8080/beneficiary?beneficiaryId="+benefId);
   }
   getAllTransactions(){
     return this.http.get("http://localhost:8080/transactions");
   }
   addTransaction(transefer){
     return this.http.post("http://localhost:8080/transaction",transefer,{responseType:'text' as 'json' })
   }
   transeferMoney(amount,accountno,customerId){
     return this.http.get("http://localhost:8080/transaction?balance="+amount+"&accountno="+accountno+"&customerId="+customerId);
   }
   getBeneficiarybyId(benefId){
     return this.http.get("http://localhost:8080//beneficiary/BeneficiaryId?beneficiaryId="+benefId);
   }
}
