import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor( public _HttpClient:HttpClient) {
     //get data from api
    _HttpClient.get("https://fakestoreapi.com/products")
   }
  //to return result of calling api
   getAllProducts():Observable<any>
   {
     return this._HttpClient.get("https://fakestoreapi.com/products");
   }



}
