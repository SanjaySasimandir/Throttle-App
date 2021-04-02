import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  addbooking(booking) {
    return this.http.post<any>('http://localhost:7000/bookings/addbooking/', { "booking": booking });
  }
  getmyorders(id) {
    return this.http.post<any>('http://localhost:7000/bookings/getmyorders/', { "id": id });
  }
  getallorders(id) {
    return this.http.post<any>('http://localhost:7000/bookings/getallorders/', { "id": id });
  }
  getbooking(id) {
    return this.http.post<any>('http://localhost:7000/bookings/getbooking/', { "id": id });
  }
  processbooking(booking) {
    return this.http.post<any>('http://localhost:7000/bookings/processbooking/', { "booking": booking });
  }
}
