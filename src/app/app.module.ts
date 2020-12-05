import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserUpdateProfileComponent } from './user-update-profile/user-update-profile.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { FetchAllCustomerComponent } from './fetch-all-customer/fetch-all-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { PostnewsComponent } from './postnews/postnews.component';
import { MytransactionsComponent } from './mytransactions/mytransactions.component';
import { AddbeneficieryComponent } from './addbeneficiery/addbeneficiery.component';
import { TranseferfundsComponent } from './transeferfunds/transeferfunds.component';
import { AtmsimulatorComponent } from './atmsimulator/atmsimulator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { AdminnavComponent } from './adminnav/adminnav.component';
import { UsernavComponent } from './usernav/usernav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './services/auth.service';
import { PaytobeneficieryComponent } from './paytobeneficiery/paytobeneficiery.component';
import { MycustomerComponent } from './mycustomer/mycustomer.component';
import { NewsComponent } from './news/news.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { BankService } from './bank.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './filter.pipe';
import { BankTransactionComponent } from './bank-transaction/bank-transaction.component';
import { Filter1Pipe } from './filter1.pipe';
import { UpdateCustComponent } from './update-cust/update-cust.component';
import { DisplaypageComponent } from './displaypage/displaypage.component';
import { DisplaypageuserComponent } from './displaypageuser/displaypageuser.component';
import { Filter2Pipe } from './filter2.pipe';
import { Filter3Pipe } from './filter3.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserLoginComponent,
    AdminloginComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    UserRegisterComponent,
    UserUpdateProfileComponent,
    AddCustomerComponent,
    FetchAllCustomerComponent,
    UpdateCustomerComponent,
    PostnewsComponent,
    MytransactionsComponent,
    AddbeneficieryComponent,
    TranseferfundsComponent,
    AtmsimulatorComponent,
    ContactusComponent,
    HomeComponent,
    AdminnavComponent,
    UsernavComponent,
    PaytobeneficieryComponent,
    MycustomerComponent,
    NewsComponent,
    ProfileComponent,
    ErrorpageComponent,
    FilterPipe,
    BankTransactionComponent,
    Filter1Pipe,
    UpdateCustComponent,
    DisplaypageComponent,
    DisplaypageuserComponent,
    Filter2Pipe,
    Filter3Pipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
    
    
  ],
  providers: [AuthService,BankService],
  bootstrap: [AppComponent]
})
export class AppModule { }
