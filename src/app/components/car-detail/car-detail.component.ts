import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car/car';
import { CarImage } from 'src/app/models/carImage/carImage';
import { CarImageServiceService } from 'src/app/services/car-image-service.service';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  cars: Car[];
  carId: number;
  carImages: CarImage[];
  imageUrl: string = 'https://localhost:44305/';
  closeResult = '';
  rentDate: Date;
  returnDate: Date;

  constructor(private activatedRoute:ActivatedRoute,
    private carService: CarService,
    private carImageService: CarImageServiceService, ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.carId = params['carId'];
      this.getCarDetailsByCarId(params['carId']);
      this.getCarImagesByCarId(params['carId']);
    })
  }
  getCarDetailsByCarId(carId: number) {
    this.carService.getCarDetails(carId).subscribe((response) => {
      this.cars = response.data;
      console.log(response);
    });
  }

  getCarImagesByCarId(carId: number) {
    this.carImageService.getCarImagesByCarId(carId).subscribe((response) => {
      this.carImages = response.data;
      console.log(response);
    });
  }

}
