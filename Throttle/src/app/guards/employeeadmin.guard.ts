import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeadminGuard implements CanActivate {
  constructor(public userService: UserService, private router: Router) { }
  canActivate(): boolean {
    if (this.userService.employeeloggedIn() || this.userService.adminloggedIn()) {
      return true;
    }
    else {
      return false;
    }
  }
}

