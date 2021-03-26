import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarsModel } from 'src/app/models/cars.model';
import { OrdersModel } from 'src/app/models/orders.model';
import { CarService } from 'src/app/services/car.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-viewmyorders',
  templateUrl: './viewmyorders.component.html',
  styleUrls: ['./viewmyorders.component.css']
})
export class ViewmyordersComponent implements OnInit {

  constructor(private router: Router, private orderService: OrderService, private carService: CarService) { }

  customerid = localStorage.getItem('id');
  orders: OrdersModel[];
  cars: CarsModel[] = [];
  length = [];


  ngOnInit(): void {

    this.orderService.getmyorders(this.customerid).subscribe(orderlist => {
      this.orders = orderlist;
      this.orders.reverse();
      for (let i = 0; i < this.orders.length; i++) {
        this.length.push(i);
        this.carService.getcar(this.orders[i].carid).subscribe((car) => {
          this.cars.push(car);
        });
      }
    });

  }

}
