import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  addorder(order) {
    return this.http.post<any>('http://localhost:7000/orders/addorder/', { "order": order });
  }

  getmyorders(customerid) {
    return this.http.post<any>('http://localhost:7000/orders/getmyorders/', { "id": customerid });
  }

  getallorders() {
    return this.http.get<any>('http://localhost:7000/orders/getallorders/');
  }

  getorder(id) {
    return this.http.post<any>('http://localhost:7000/orders/getorder/', { "id": id });
  }

  processorder(order) {
    return this.http.post<any>('http://localhost:7000/orders/processorder/', { "order": order });
  }
}
