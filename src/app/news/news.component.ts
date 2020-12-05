import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BankService } from '../bank.service';
import { News } from '../news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  newses: any;

  news :News= new News("","","");

  constructor(private router:Router,private service:BankService,private acivatedRouter:ActivatedRoute) { }

  ngOnInit(){
    this.getNews();
  }
 
  getNews(){
  let resp= this.service.getAllNews();
  resp.subscribe((data)=>{
    this.newses=data['data']});
  }

}
