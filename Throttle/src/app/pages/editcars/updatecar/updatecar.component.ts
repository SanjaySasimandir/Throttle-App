import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsModel } from 'src/app/models/cars.model';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-updatecar',
  templateUrl: './updatecar.component.html',
  styleUrls: ['./updatecar.component.css']
})
export class UpdatecarComponent implements OnInit {

  constructor(private carService: CarService, private router: Router, private activatedRoute: ActivatedRoute) { }

  car: CarsModel;
  carId;
  submit() {
    console.log(this.car);
    this.carService.updatecar(this.car);
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(id => this.carId = id.id);
    this.carService.getcar(this.carId).subscribe((cardata: any) => {
      this.car = cardata;
    });
  }

}
