import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from 'src/app/models/responseModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { User } from 'src/app/models/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "https://localhost:44305/api/users/";
  constructor(private httpClient : HttpClient) { }

  getByEmail(email:string):Observable<SingleResponseModel<User>>{
    let newPath = this.apiUrl+'getbymail?email='+email;
    return this.httpClient.get<SingleResponseModel<User>>(newPath);
  }

  getUserById(userId: number): Observable<SingleResponseModel<User>> {
    let newUrl = this.apiUrl+'getbyid?userid='+userId;
    return this.httpClient.get<SingleResponseModel<User>>(newUrl);
  }

  update(user:User):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"update",user)
    }
    delete(user:User):Observable<ResponseModel>{
      return this.httpClient.post<ResponseModel>(this.apiUrl+"delete",user)
      }

}
