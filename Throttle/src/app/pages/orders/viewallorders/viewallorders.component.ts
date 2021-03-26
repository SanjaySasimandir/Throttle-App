import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarsModel } from 'src/app/models/cars.model';
import { OrdersModel } from 'src/app/models/orders.model';
import { CarService } from 'src/app/services/car.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-viewallorders',
  templateUrl: './viewallorders.component.html',
  styleUrls: ['./viewallorders.component.css']
})
export class ViewallordersComponent implements OnInit {

  constructor(private router: Router, private carService: CarService, private orderService: OrderService) { }

  orders: OrdersModel[];
  cars: CarsModel[] = [];
  length = [];

  ngOnInit(): void {
    this.orderService.getallorders().subscribe(orderlist => {
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
