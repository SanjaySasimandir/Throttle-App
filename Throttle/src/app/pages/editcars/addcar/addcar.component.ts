import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarsModel } from 'src/app/models/cars.model';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent implements OnInit {

  constructor(private carService: CarService, private router: Router) { }

  submit() {
    console.log(this.newCar);
    this.carService.addcar(this.newCar).subscribe(status => {
      if (status.message == "success") {
        this.router.navigate(['/browse']);
      }
    });
  }

  newCar = new CarsModel(null, null, null, null, null, null, null, null, null);
  ngOnInit(): void {
  }

}
