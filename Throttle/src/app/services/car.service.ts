import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  // Get all Cars
  getcars() {
    return this.http.get<any>('http://localhost:7000/cars/getcars');
  };

  // Get individual car
  getcar(id) {
    return this.http.get<any>('http://localhost:7000/cars/getcar/' + id);
  };

  // Add a car to the list
  addcar(data: any) {
    return this.http.post<any>('http://localhost:7000/cars/addcar/', { "car": data });
  };

  // Delete a car
  deletecar(id) {
    return this.http.post<any>('http://localhost:7000/cars/deletecar', { "carId": id });
  };

  // Update a car
  updatecar(car: any) {
    return this.http.post<any>('http://localhost:7000/cars/updatecar', { "car": car });
  }

}
