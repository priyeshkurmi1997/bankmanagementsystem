import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddbeneficieryComponent } from './addbeneficiery/addbeneficiery.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminnavComponent } from './adminnav/adminnav.component';
import { AtmsimulatorComponent } from './atmsimulator/atmsimulator.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DisplaypageComponent } from './displaypage/displaypage.component';
import { DisplaypageuserComponent } from './displaypageuser/displaypageuser.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { MycustomerComponent } from './mycustomer/mycustomer.component';
import { MytransactionsComponent } from './mytransactions/mytransactions.component';
import { NewsComponent } from './news/news.component';
import { PaytobeneficieryComponent } from './paytobeneficiery/paytobeneficiery.component';
import { ProfileComponent } from './profile/profile.component';
import { TranseferfundsComponent } from './transeferfunds/transeferfunds.component';
import { UpdateCustComponent } from './update-cust/update-cust.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UsernavComponent } from './usernav/usernav.component';


const routes: Routes = [
  {path:"adminlogin",component:AdminloginComponent},
  {path:"login",component:UserLoginComponent},
  {path:"admindashboard",component:AdminDashboardComponent,canActivate:[AuthGuard]},
  {path:"userdashboard",component:UserDashboardComponent,canActivate:[AuthGuard]},
  {path:"addcustomer",component:AddCustomerComponent,canActivate:[AuthGuard]},
  {path:"contactus",component:ContactusComponent},
  {path:"updatecustomer/:id",component:UpdateCustomerComponent,canActivate:[AuthGuard]},
  {path:"updatecust/:id",component:UpdateCustComponent,canActivate:[AuthGuard]},
  {path:"adminnav",component:AdminnavComponent},
  {path:"usernav",component:UsernavComponent},
  {path:"postnews",component:UsernavComponent,canActivate:[AuthGuard]},
  {path:"",component:HomeComponent},
  {path:"addbeneficiery",component:AddbeneficieryComponent},
  {path:"atmsimulator",component:AtmsimulatorComponent},
  {path:"mytransaction",component:MytransactionsComponent},
  {path:"transeferfunds",component:TranseferfundsComponent},
  {path:"paytobeneficiery/:id",component:PaytobeneficieryComponent},
  {path:"mycustomer",component:MycustomerComponent},
  {path:"userregister",component:UserRegisterComponent},
  {path:"news",component:NewsComponent},
  {path:"profile",component:ProfileComponent,canActivate:[AuthGuard]},
  {path:"displayuser",component:DisplaypageuserComponent},
  {path:"display",component:DisplaypageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
