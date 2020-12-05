import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BankService } from '../bank.service';
import { News } from '../news';

@Component({
  selector: 'app-postnews',
  templateUrl: './postnews.component.html',
  styleUrls: ['./postnews.component.css']
})
export class PostnewsComponent implements OnInit {
  news :News=new News("","","");
  message:any;
  result: any;

  constructor(private service:BankService,private route :Router) { }

  ngOnInit() {
  }
  public onPostNews(){
    let resp=this.service.doPostnews(this.news);
    resp.subscribe((data)=>this.message=data);
    alert("News Submitted Succesfully...!!!")
  }

//  onPostNews(form:NgForm){
//    console.log(form.value);
//    this.service.doPostnews(form.value).subscribe(data=>{
//      this.result=data;
//      console.log(data);
//    })
//    form.reset();
 
//   }

}
