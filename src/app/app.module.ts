import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule, Routes } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormGroup, FormControl, FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistermeComponent } from './registerme/registerme.component';
import { ForgetinfoComponent } from './forgetinfo/forgetinfo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginsentComponent } from './loginsent/loginsent.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MyordersComponent } from './myorders/myorders.component';
import { PlaceneworderComponent } from './placeneworder/placeneworder.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { AddressComponent } from './address/address.component';
import { DeliveriesComponent } from './deliveries/deliveries.component';
import { ProfileComponent } from './profile/profile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { MyinvoicesComponent } from './myinvoices/myinvoices.component';
import { NeworderComponent } from './neworder/neworder.component';
import { UnitorderComponent } from './unitorder/unitorder.component';
import { CommandsComponent } from './commands/commands.component';
import { SquareComponent } from './square/square.component';
import { ProductsComponent } from './products/products.component';
import { AccessComponent } from './access/access.component';
import { RevieworderComponent } from './revieworder/revieworder.component';
import { CompleteornewComponent } from './completeornew/completeornew.component';
import { CompleteComponent } from './complete/complete.component';
import { TimeComponent } from './time/time.component';
import { PriceComponent } from './price/price.component';






const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'register', component: RegistermeComponent },
  { path: 'forgetinfo', component: ForgetinfoComponent },
  { path: 'dashboard', component:  DashboardComponent },
  { path: 'loginsent', component: LoginsentComponent },
  { path: 'myorders', component: MyordersComponent },
  { path: 'placeneworder', component: PlaceneworderComponent },
  { path: 'myaccount', component: MyaccountComponent },
  { path: 'address', component: AddressComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'neworder', component: NeworderComponent },
  { path: 'deliveries', component: DeliveriesComponent },
  { path: 'unitorder', component: UnitorderComponent },
  { path: 'myinvoices', component: MyinvoicesComponent },
  { path: 'commands', component: CommandsComponent },
  { path: 'square', component: SquareComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'access', component: AccessComponent },
  { path: 'revieworder', component: RevieworderComponent },
  { path: 'completeornew', component:  CompleteornewComponent },
  { path: 'complete', component:  CompleteComponent },
  { path: 'editprofile', component:  EditprofileComponent },
  { path: 'time', component:  TimeComponent },
  { path: 'price', component:  PriceComponent },
 

 

] 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistermeComponent,
    ForgetinfoComponent,
    DashboardComponent,
    LoginsentComponent,
    NavbarComponent,
    MyordersComponent,
    PlaceneworderComponent,
    MyaccountComponent,
    AddressComponent,
    DeliveriesComponent,
    ProfileComponent,
    EditprofileComponent,
    MyinvoicesComponent,
    NeworderComponent,
    UnitorderComponent,
    CommandsComponent,
    SquareComponent,
    ProductsComponent,
    AccessComponent,
    RevieworderComponent,
    CompleteornewComponent,
    CompleteComponent,
    TimeComponent,
    PriceComponent,
  
    

   
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
