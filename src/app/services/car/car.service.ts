import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Car } from 'src/app/models/car/car';
import { ResponseModel } from 'src/app/models/responseModel';
import { CarAdd } from 'src/app/models/car/car-add';


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

  getCarDetailsByCarId(carId:number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getbycarid?carId='+carId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  } 


  getCarsByBrand(brandId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcardetailsbybrandid?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColor(colorId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcardetailsbycolorid?colorId=' + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
   

  getCarByBrandAndColorId(brandId:number,colorId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+'cars/getcardetailsbybrandandcolorid?brandId='+brandId+'&&colorId='+colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  add(car:CarAdd):Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/add",car)
  }

  update(car:CarAdd):Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/update",car)
  }

  delete(car:CarAdd):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/delete",car)
  }


}
