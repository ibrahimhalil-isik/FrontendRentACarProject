import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car/car';
import { CarImage } from 'src/app/models/carImage/carImage';
import { Customer } from 'src/app/models/customer/customer';
import { Rental } from 'src/app/models/rental/rental';
import { CarImageServiceService } from 'src/app/services/car-image/car-image-service.service';
import { CarService } from 'src/app/services/car/car.service';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { RentalService } from 'src/app/services/rental/rental.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  cars: Car[];
  carId: number;
  carImages: CarImage[];
  imageUrl: string = 'https://localhost:44305/';
  closeResult = '';
  rentDate: Date;
  returnDate: Date;
  customers: Customer[] = [];
  rentals: Rental[]= [];
  carx: Car = {
    carId: 0,
    carName: '',
    brandName: '',
    colorName: '',
    dailyPrice: 0,
    modelYear: 0,
    description: '',
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private carService: CarService,
    private carImageService: CarImageServiceService,
    private customerService: CustomerService,
    private rentalService:RentalService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.carId = params['carId'];
        this.getCarDetailsByCarId(params['carId']);
        this.getCarImagesByCarId(params['carId']);        
        this.getRentals(params['carId']);
      }
    });
  }
  getCarDetailsByCarId(carId: number) {
    this.carService.getCarDetailsByCarId(carId).subscribe((response) => {
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


  getBack() {
    this.carService.getCar();
  }

  getCars() {
    this.carService.getCar().subscribe((response) => {
      this.cars = response.data;
    });
  }

 getRentals(carId: number) {
  this.rentalService.getRental().subscribe(response=>{
    this.rentals = response.data
  })
}

}
