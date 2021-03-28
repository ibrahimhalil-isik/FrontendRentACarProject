import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalResponseModel } from 'src/app/models/rental/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl = 'https://localhost:44305/api/rentals/getall';

  constructor(private httpClient: HttpClient) { }

  getRental():Observable<RentalResponseModel> {
    return this.httpClient.get<RentalResponseModel>(this.apiUrl)     
  }
}