import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { CustomerGuard } from './guards/customer.guard';
import { EmployeeadminGuard } from './guards/employeeadmin.guard';
import { AddcarsComponent } from './pages/addcars/addcars.component';
// import { BookserviceComponent } from './pages/bookservice/bookservice.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { CarComponent } from './pages/car/car.component';
import { BookserviceComponent } from './pages/carservice/bookservice/bookservice.component';
import { ViewallbookingsComponent } from './pages/carservice/viewallbookings/viewallbookings.component';
import { ViewbookingComponent } from './pages/carservice/viewbooking/viewbooking.component';
import { ViewmybookingComponent } from './pages/carservice/viewmybooking/viewmybooking.component';
import { AddcarComponent } from './pages/editcars/addcar/addcar.component';
import { DeletecarComponent } from './pages/editcars/deletecar/deletecar.component';
import { EditcarsComponent } from './pages/editcars/editcars.component';
import { UpdatecarComponent } from './pages/editcars/updatecar/updatecar.component';
import { EdituserComponent } from './pages/edituser/edituser.component';
import { EditusersComponent } from './pages/editusers/editusers.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AddorderComponent } from './pages/orders/addorder/addorder.component';
import { ProcessorderComponent } from './pages/orders/processorder/processorder.component';
import { ViewallordersComponent } from './pages/orders/viewallorders/viewallorders.component';
import { ViewmyordersComponent } from './pages/orders/viewmyorders/viewmyorders.component';
import { VieworderComponent } from './pages/orders/vieworder/vieworder.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "browse", component: BrowseComponent },
  { path: "browse/:id", component: CarComponent },
  { path: "editcar/:id", canActivate: [AdminGuard], component: UpdatecarComponent },
  { path: "deletecar/:id", canActivate: [AdminGuard], component: DeletecarComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "addcar", canActivate: [AdminGuard], component: AddcarComponent },
  { path: "order/:id", canActivate: [CustomerGuard], component: AddorderComponent },
  { path: "myorders", canActivate: [CustomerGuard], component: ViewmyordersComponent },
  { path: "orders", canActivate: [EmployeeadminGuard], component: ViewallordersComponent },
  { path: "orders/process/:id", canActivate: [EmployeeadminGuard], component: ProcessorderComponent },
  { path: "orders/:id", canActivate: [EmployeeadminGuard, CustomerGuard], component: VieworderComponent },
  { path: "bookservice", canActivate: [CustomerGuard], component: BookserviceComponent },
  { path: "viewmybookings", canActivate: [CustomerGuard], component: ViewmybookingComponent },
  { path: "viewallbookings", canActivate: [EmployeeadminGuard], component: ViewallbookingsComponent },
  { path: "bookings/:id", canActivate: [EmployeeadminGuard], component: ViewbookingComponent },
  { path: "editusers", canActivate: [EmployeeadminGuard], component: EditusersComponent },
  { path: "editusers/:id", canActivate: [EmployeeadminGuard], component: EdituserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
