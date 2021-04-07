import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  submit() {
    this.userService.loginvalidate(this.user).subscribe((status) => {
      if (status.message == "Success") {
        localStorage.setItem("id", status.id);
        localStorage.setItem("token", status.token);
        localStorage.setItem("role", status.role);

        this.router.navigate(['/']);
      }
      else if (status.message == "Wrong Password") {
        this.displayMessage = "Wrong Password!";
        this.divIsVisible = true;
      }
      else if (status.message == "Wrong email") {
        this.displayMessage = "Invalid email!";
        this.divIsVisible = true;
      }
    })
  }

  user = {
    email: "",
    password: ""
  };
  divIsVisible = false;

  displayMessage = "";

  ngOnInit(): void {
  }

}
