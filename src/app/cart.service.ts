import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { IUser } from './Shared Classes and types/interface/user.interface';
// import { ICart } from './Shared Classes and types/interface/cart.interface';
import { CartVm } from './cart/CartVm';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  baseUrl: string = 'http://localhost:37724/api';
  // constructor(private http: HttpClient) {}
  constructor(private http: HttpClient ,private httpClient:HttpClient) {}
  addToCart(
    userId: string,
    movieId: string,
    quantity: number
  ): Observable<void> {
    return this.http
      .post<void>(`${this.baseUrl}/CartItems`, {
        userId: userId,
        movieId: movieId,
        quantity: quantity,
      })
      .pipe(
        catchError((err) => {
          return throwError(() => err.message || 'Server error');
        })
      );
  }
  getCartItems(userId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/CartItems/user/${userId}`).pipe(
      catchError((err) => {
        return throwError(() => err.message || 'Server error');
      })
    );
  }
  getById(id: number): Observable<CartVm> {
    const url = `${this.baseUrl}/CartItems/Cart/${id}`;
    return this.httpClient.get<CartVm>(url);
  }

  deleteFromCart(
    userId: string,
    movieId: string,
    quantity: number,
    id: number
  ): Observable<void> {
    return this.http
      .delete<void>(`${this.baseUrl}/CartItems`, {
        body: {
          userId: userId,
          movieId: movieId,
          quantity: quantity,
          id: id,
        },
      })
      .pipe(
        catchError((err) => {
          return throwError(() => err.message || 'Server error');
        })
      );
  }
}
