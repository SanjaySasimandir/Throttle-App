import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { BookserviceComponent } from './pages/bookservice/bookservice.component';
import { AddcarsComponent } from './pages/addcars/addcars.component';
import { EditcarsComponent } from './pages/editcars/editcars.component';
import { AddcarComponent } from './pages/editcars/addcar/addcar.component';
import { UpdatecarComponent } from './pages/editcars/updatecar/updatecar.component';
import { CarComponent } from './pages/car/car.component';
import { DeletecarComponent } from './pages/editcars/deletecar/deletecar.component';
import { AddorderComponent } from './pages/orders/addorder/addorder.component';
import { ViewmyordersComponent } from './pages/orders/viewmyorders/viewmyorders.component';
import { ProcessorderComponent } from './pages/orders/processorder/processorder.component';
import { ViewallordersComponent } from './pages/orders/viewallorders/viewallorders.component';
import { VieworderComponent } from './pages/orders/vieworder/vieworder.component';
import { ViewmybookingComponent } from './pages/carservice/viewmybooking/viewmybooking.component';
import { ViewallbookingsComponent } from './pages/carservice/viewallbookings/viewallbookings.component';
import { ViewbookingComponent } from './pages/carservice/viewbooking/viewbooking.component';
import { UserService } from './services/user.service';
import { CarService } from './services/car.service';
import { OrderService } from './services/order.service';
import { EditusersComponent } from './pages/editusers/editusers.component';
import { EdituserComponent } from './pages/edituser/edituser.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BrowseComponent,
    BookserviceComponent,
    AddcarsComponent,
    EditcarsComponent,
    AddcarComponent,
    UpdatecarComponent,
    CarComponent,
    DeletecarComponent,
    AddorderComponent,
    ViewmyordersComponent,
    ProcessorderComponent,
    ViewallordersComponent,
    VieworderComponent,
    ViewmybookingComponent,
    ViewallbookingsComponent,
    ViewbookingComponent,
    EditusersComponent,
    EdituserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService, CarService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
