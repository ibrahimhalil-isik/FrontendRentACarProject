import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Rental } from 'src/app/models/rental/rental';
import { RentalAdd } from 'src/app/models/rental/rental-add';
import { ResponseModel } from 'src/app/models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  rental:Rental;
  apiUrl = 'https://localhost:44305/api/rentals';

  constructor(private httpClient: HttpClient) { }

  getRental():Observable<ListResponseModel<Rental>> {
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl+'/getrentaldetails')     
  }

  getRentalsByCarId(carId:number):Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl + '/getrentaldetailsbycarid?id='+carId;
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  rentalDateCheck(datecheck:Rental){
    let newPath=this.apiUrl+"/datecheck"
    return this.httpClient.post<ResponseModel>(newPath,datecheck);
  }  

  add(rental:RentalAdd):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"/add",rental)
  }
}