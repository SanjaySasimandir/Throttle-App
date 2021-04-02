import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceModel } from 'src/app/models/service.model';
import { UserModel } from 'src/app/models/user.model';
import { BookingService } from 'src/app/services/booking.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-viewbooking',
  templateUrl: './viewbooking.component.html',
  styleUrls: ['./viewbooking.component.css']
})
export class ViewbookingComponent implements OnInit {

  constructor(private router: Router, private bookingService: BookingService, private activatedRoute: ActivatedRoute, public userService: UserService) { }

  booking: ServiceModel;
  id;
  customer: UserModel;
  maintenancelist;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
      this.bookingService.getbooking(this.id).subscribe(booking => {
        this.booking = booking;
        this.maintenancelist = this.booking.repairslist.split('\\n');
        console.log(this.booking.repairslist);
        this.userService.getuser(this.booking.customerid).subscribe(user => {
          this.customer = user[0];
          if (localStorage.getItem('role') != "Customer") {
            this.booking.deliverymode = "Customer picks up";
            this.booking.pickupmode = "Customer drop-off";
          }
          if (this.booking.deliverydate == null) {
            this.booking.deliverydate = this.booking.status;
          }
        });
      });
    });
  }

}
