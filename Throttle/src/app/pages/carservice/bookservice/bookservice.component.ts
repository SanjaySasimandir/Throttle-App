import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceModel } from 'src/app/models/service.model';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-bookservice',
  templateUrl: './bookservice.component.html',
  styleUrls: ['./bookservice.component.css']
})
export class BookserviceComponent implements OnInit {

  constructor(private router: Router, private bookingService: BookingService) { }

  customerid;
  booking = new ServiceModel(null, null, null, null, null, null, null, null, null, null, null, null, null, null);
  date = new Date();
  current_date = `${this.date.getFullYear()}-${("0" + (this.date.getMonth() + 1)).slice(-2)}-${("0" + this.date.getDate()).slice(-2)}`;

  submit() {
    this.booking.repairslist = this.booking.repairslist.split('\n').join('\\n');
    this.bookingService.addbooking(this.booking).subscribe(status => {
      if (status.message == "success") {
        this.router.navigate(['/viewmybookings']);
      }
    });
  }

  ngOnInit(): void {
    this.customerid = localStorage.getItem("id");
    this.booking.customerid = this.customerid;
    this.booking.pickupdate = this.current_date;
    this.booking.pickupmode = "I will drop the car off myself";
    this.booking.deliverymode = "I will collect the car myself";
    this.booking.status = "To be Processed";
  }

}
