import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceModel } from 'src/app/models/service.model';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-processbooking',
  templateUrl: './processbooking.component.html',
  styleUrls: ['./processbooking.component.css']
})
export class ProcessbookingComponent implements OnInit {

  constructor(private router: Router, private bookingService: BookingService, private activatedRoute: ActivatedRoute) { }

  bookingid;
  booking: ServiceModel;
  newstatus;
  date = new Date();
  current_date = `${this.date.getFullYear()}-${("0" + (this.date.getMonth() + 1)).slice(-2)}-${("0" + this.date.getDate()).slice(-2)}`;

  submit() {
    this.booking.status = this.newstatus;
    this.bookingService.processbooking(this.booking).subscribe(status => {
      if (status.message == "success") {
        this.router.navigate(['/bookings/' + this.bookingid]);
      }
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.bookingid = params.id;
      this.bookingService.getbooking(this.bookingid).subscribe(booking => {
        this.booking = booking;
        this.booking.deliverydate = this.current_date;
      });
    });
  }

}
