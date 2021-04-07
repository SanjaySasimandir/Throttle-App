import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  addbooking(booking) {
    return this.http.post<any>('https://throttle-app-backend.herokuapp.com/bookings/addbooking/', { "booking": booking });
  }
  getmyorders(id) {
    return this.http.post<any>('https://throttle-app-backend.herokuapp.com/bookings/getmyorders/', { "id": id });
  }
  getallorders(id) {
    return this.http.post<any>('https://throttle-app-backend.herokuapp.com/bookings/getallorders/', { "id": id });
  }
  getbooking(id) {
    return this.http.post<any>('https://throttle-app-backend.herokuapp.com/bookings/getbooking/', { "id": id });
  }
  processbooking(booking) {
    return this.http.post<any>('https://throttle-app-backend.herokuapp.com/bookings/processbooking/', { "booking": booking });
  }
}
