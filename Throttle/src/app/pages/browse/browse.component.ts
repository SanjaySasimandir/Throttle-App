import { Component, OnInit } from '@angular/core';
import { CarsModel } from 'src/app/models/cars.model';
import { CarService } from 'src/app/services/car.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  constructor(private carService: CarService, public userService: UserService) { }

  carlist: CarsModel[];
  ngOnInit(): void {
    this.carService.getcars().subscribe((data: any) => {
      this.carlist = data.reverse();
    })
  }

}
