import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCard } from 'src/app/models/creditCard/creditCard';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { ResponseModel } from 'src/app/models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  apiUrl = "https://localhost:44305/api/creditcards/"
  constructor(private httpClient:HttpClient) { }

  addCard(card:CreditCard):Observable<ResponseModel>{
    let path = this.apiUrl +"add";
    return this.httpClient.post<ResponseModel>(path,card);
  }

  deleteCard(card:CreditCard):Observable<ResponseModel>{
    let path = this.apiUrl + "delete";
    return this.httpClient.post<ResponseModel>(path,card);
  }

  getCardsCyCustomerId(customerId:number):Observable<ListResponseModel<CreditCard>>{
    let path = this.apiUrl + "getbycustomer?customerId=" + customerId;
    return this.httpClient.get<ListResponseModel<CreditCard>>(path);
  }

  payment(creditCard:CreditCard):Observable<ResponseModel>{
    let path = this.apiUrl + "payment";
    return this.httpClient.post<ResponseModel>(path,creditCard);
  }

}
