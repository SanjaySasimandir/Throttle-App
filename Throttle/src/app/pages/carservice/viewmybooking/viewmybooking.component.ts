import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceModel } from 'src/app/models/service.model';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-viewmybooking',
  templateUrl: './viewmybooking.component.html',
  styleUrls: ['./viewmybooking.component.css']
})
export class ViewmybookingComponent implements OnInit {

  constructor(private router: Router, private bookingService: BookingService) { }

  bookings: ServiceModel[];
  customerid;

  ngOnInit(): void {
    this.customerid = localStorage.getItem("id");
    this.bookingService.getmyorders(this.customerid).subscribe((data: any) => {
      this.bookings = data.reverse();
    });
  }

}
