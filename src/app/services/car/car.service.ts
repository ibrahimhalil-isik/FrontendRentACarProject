import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Car } from 'src/app/models/car/car';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44305/api/';

  constructor(private httpClient: HttpClient) {}

  getCar(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcardetails';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcarbybrandid?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColor(colorId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcarbycolorid?colorId=' + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarDetails(carId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcardetailsbyid?carId=' + carId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}
