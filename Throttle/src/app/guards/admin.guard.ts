import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(public userService: UserService, private router: Router) { }
  canActivate(): boolean {
    return this.userService.adminloggedIn()
  }

}
