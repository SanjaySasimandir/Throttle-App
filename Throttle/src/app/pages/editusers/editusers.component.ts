import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-editusers',
  templateUrl: './editusers.component.html',
  styleUrls: ['./editusers.component.css']
})
export class EditusersComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  users: UserModel[];

  ngOnInit(): void {
    this.userService.getusers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }

}
