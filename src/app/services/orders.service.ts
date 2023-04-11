import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { catchError, Observable, throwError } from 'rxjs';
import { IAllOrders } from '../Shared Classes and types/interface/all-orders.interface';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {
 baseUrl : string = "http://localhost:37724/api/CartItems";
  constructor(private http: HttpClient) { }

  getUsersOrders() : Observable <IAllOrders>
  {
    return this.http.get<IAllOrders>(this.baseUrl).pipe(catchError((err) => {
      return throwError (() => err.message || "Server error")
    }));
  }

}
