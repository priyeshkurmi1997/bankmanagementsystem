import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
   User:any;
  constructor(private route : Router) { }

  ngOnInit() {
    this.User=JSON.parse(localStorage.getItem("user"));
    console.log(this.User);
  }         
       
  back(){
    this.route.navigateByUrl('userdashboard')
  }


}
