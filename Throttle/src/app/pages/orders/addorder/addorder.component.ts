import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsModel } from 'src/app/models/cars.model';
import { OrdersModel } from 'src/app/models/orders.model';
import { CarService } from 'src/app/services/car.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddorderComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private orderService: OrderService, private carService: CarService) { }


  car = new CarsModel(null, null, null, null, null, null, null, null, null);
  order = new OrdersModel(null, null, null, null, null, null, null, null);
  carId;
  customerid;
  date = new Date();
  current_date = `${this.date.getFullYear()}-${("0" + (this.date.getMonth() + 1)).slice(-2)}-${("0" + this.date.getDate()).slice(-2)}`

  submit() {
    this.orderService.addorder(this.order).subscribe(status => {
      if (status.message == "success") {
        this.router.navigate(['/browse']);
      }
    });
  }

  ngOnInit(): void {
    this.customerid = localStorage.getItem("id");
    this.activatedRoute.params.subscribe(id => this.carId = id.id);
    this.carService.getcar(this.carId).subscribe((cardata: any) => {
      this.car = cardata;
      this.order = new OrdersModel(null, this.car._id, this.current_date, "Pick Up By Self", this.customerid, null, null, "To be Processed");
    });
  }

}
