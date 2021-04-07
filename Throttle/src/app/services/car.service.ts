import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  // Get all Cars
  getcars() {
    return this.http.get<any>('https://throttle-app-backend.herokuapp.com/cars/getcars');
  };

  // Get individual car
  getcar(id) {
    return this.http.get<any>('https://throttle-app-backend.herokuapp.com/cars/getcar/' + id);
  };

  // Add a car to the list
  addcar(data: any) {
    return this.http.post<any>('https://throttle-app-backend.herokuapp.com/cars/addcar/', { "car": data });
  };

  // Delete a car
  deletecar(id) {
    return this.http.post<any>('https://throttle-app-backend.herokuapp.com/cars/deletecar', { "carId": id });
  };

  // Update a car
  updatecar(car: any) {
    return this.http.post<any>('https://throttle-app-backend.herokuapp.com/cars/updatecar', { "car": car });
  }

}
