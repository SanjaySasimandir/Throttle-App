import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  addorder(order) {
    return this.http.post<any>('https://throttle-app-backend.herokuapp.com/orders/addorder/', { "order": order });
  }

  getmyorders(customerid) {
    return this.http.post<any>('https://throttle-app-backend.herokuapp.com/orders/getmyorders/', { "id": customerid });
  }

  getallorders() {
    return this.http.get<any>('https://throttle-app-backend.herokuapp.com/orders/getallorders/');
  }

  getorder(id) {
    return this.http.post<any>('https://throttle-app-backend.herokuapp.com/orders/getorder/', { "id": id });
  }

  processorder(order) {
    return this.http.post<any>('https://throttle-app-backend.herokuapp.com/orders/processorder/', { "order": order });
  }
}
