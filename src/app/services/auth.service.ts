import { Injectable, NgZone } from "@angular/core";
import { Router } from '@angular/router';


@Injectable()
export class AuthService{
  user_data:any; // save user data locally
    constructor(
      private router:Router,
      public ngZone: NgZone
    ) {

    }
    
   
    getloggedinUser(){
      return localStorage.getItem('user');
    }
    logoutUser(){
      localStorage.removeItem('user');
    }
 
}