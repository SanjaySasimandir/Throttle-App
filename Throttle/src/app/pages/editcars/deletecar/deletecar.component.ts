import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsModel } from 'src/app/models/cars.model';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-deletecar',
  templateUrl: './deletecar.component.html',
  styleUrls: ['./deletecar.component.css']
})
export class DeletecarComponent implements OnInit {

  constructor(private carService: CarService, private router: Router, private activatedRoute: ActivatedRoute) { }

  car = new CarsModel(null, null, null, null, null, null, null, null, null);
  carId;

  delete() {
    console.log('delete');
    this.carService.deletecar(this.carId).subscribe(status => {
      if (status.message == "success") {
        this.router.navigate(['/browse'],);
      }
    });
  };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(id => this.carId = id.id);
    this.carService.getcar(this.carId).subscribe((cardata: any) => {
      this.car = cardata;
    });
  }

}
