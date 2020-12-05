import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaypage',
  templateUrl: './displaypage.component.html',
  styleUrls: ['./displaypage.component.css']
})
export class DisplaypageComponent implements OnInit {
  User1: any;

  constructor() { }

  ngOnInit() {
    this.User1=JSON.parse(localStorage.getItem("user"));
    console.log(this.User1);
  }

}
