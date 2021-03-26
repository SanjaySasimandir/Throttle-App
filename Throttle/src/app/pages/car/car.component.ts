import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsModel } from 'src/app/models/cars.model';
import { CarService } from 'src/app/services/car.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor(private carService: CarService, private router: Router, private activatedRoute: ActivatedRoute, public userService: UserService) { }

  car = new CarsModel(null, null, null, null, null, null, null, null, null);
  carId;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(id => this.carId = id.id);
    this.carService.getcar(this.carId).subscribe((cardata: any) => {
      this.car = cardata;
    });
    // console.log(this.car);
  }

}
