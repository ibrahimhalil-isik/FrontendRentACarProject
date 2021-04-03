import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Rental } from 'src/app/models/rental/rental';
import { ResponseModel } from 'src/app/models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl = 'https://localhost:44305/api/rentals/getrentaldetails';

  constructor(private httpClient: HttpClient) { }

  getRental():Observable<ListResponseModel<Rental>> {
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl)     
  }
  getRentalsByCarId(carId:number):Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl + 'rentals/getrentaldetailsbycarid?id='+carId;
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  rentalDateCheck(datecheck:Rental){
    let newPath=this.apiUrl+"rentals/datecheck"
    return this.httpClient.post<ResponseModel>(newPath,datecheck);
  }  
}