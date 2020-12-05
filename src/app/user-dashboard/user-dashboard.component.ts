import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  selected: number=0;
  User: any;

  constructor( private auth_service:AuthService,private route:Router) { }

  ngOnInit() {
    this.User=JSON.parse(localStorage.getItem("user"));
    console.log(this.User);


    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }
  onSelect(selected){
    this.selected=selected
   }

   onLogout(){
    this.auth_service.logoutUser();
    this.route.navigateByUrl('');
   }

}
