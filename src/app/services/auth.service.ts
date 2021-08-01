import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/loginModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl="https://localhost:44314/api/auth/";
  constructor(private httpClient:HttpClient,private localStorageService:LocalStorageService) { }

  login(loginModel:LoginModel):Observable<SingleResponseModel<TokenModel>>
  {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login",loginModel)
  }
  isAuthenticated() {
    if (this.localStorageService.get("token")) {
      return true;
    } else {
      return false;
    }
  }

}
