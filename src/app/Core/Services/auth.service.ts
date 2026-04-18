import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from '../../Shared/Interfaces/auth';

@Injectable({
  providedIn: 'root'
})

// Observable (subscribe / unsubscribe)
// Promise (eger / uncancled)
// Rxjs (Reactive X)

export class AuthService {

  constructor(private _HttpClient:HttpClient) { }


  login(data:Auth):Observable<any> {
  return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,data)
 }

 register(data:Auth):Observable<any>{
  return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,data)
 }


}
