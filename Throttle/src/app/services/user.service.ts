import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  adduser(data: any) {
    return this.http.post<any>('http://localhost:7000/users/adduser/', { "user": data });
  };

  loginvalidate(data: any) {
    return this.http.post<any>('http://localhost:7000/users/loginvalidate/', { "user": data });
  }

  getuser(id) {
    return this.http.post<any>('http://localhost:7000/users/getuser/', { "id": id });
  }

  getusers() {
    return this.http.post<any>('http://localhost:7000/users/getusers/', { "get": "get" });
  }

  updaterole(data) {
    return this.http.post<any>('http://localhost:7000/users/updaterole/', { "user": data });
  }

  loggedIn() {
    return !!localStorage.getItem('id');
  }

  customerloggedIn() {
    return localStorage.getItem('role') == 'Customer';
  }

  employeeloggedIn() {
    return localStorage.getItem('role') == 'Employee';
  }

  adminloggedIn() {
    return localStorage.getItem('role') == 'Admin';
  }

  getToken() {
    return localStorage.getItem('id');
  }

  removeToken() {
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }
}
