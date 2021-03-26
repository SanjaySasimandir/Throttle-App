import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  constructor(private router: Router, private userService: UserService, private activatedRoute: ActivatedRoute) { }

  user: UserModel;
  userid;
  currentrole;

  submit() {
    this.userService.updaterole(this.user).subscribe(status => {
      if (status.message == "success") {
        this.router.navigate(['/editusers']);
      }
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.userid = params.id;
      console.log(this.userid);
      this.userService.getuser(this.userid).subscribe(user => {
        this.user = user[0];
        this.currentrole = this.user.role;
      });
    });
  }

}
