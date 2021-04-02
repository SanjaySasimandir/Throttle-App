import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsModel } from 'src/app/models/cars.model';
import { OrdersModel } from 'src/app/models/orders.model';
import { UserModel } from 'src/app/models/user.model';
import { CarService } from 'src/app/services/car.service';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-vieworder',
  templateUrl: './vieworder.component.html',
  styleUrls: ['./vieworder.component.css']
})
export class VieworderComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, public userService: UserService, private carService: CarService, private orderService: OrderService) { }

  orderid;
  order= new OrdersModel(null,null,null, null, null, null, null,null);
  customer= new UserModel(null,null,null, null, null, null, null, null);
  car= new CarsModel(null,null,null, null, null, null, null,null,null);



  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.orderid = params.id;
      this.orderService.getorder(this.orderid).subscribe(orderlist => {
        this.order = orderlist[0];
        this.carService.getcar(this.order.carid).subscribe(carlist => {
          this.car = carlist;
        });
        this.userService.getuser(this.order.customerid).subscribe(userlist => {
          this.customer = userlist[0];
        });
      });
    });
  }

}
