import { IUser } from './../Shared Classes and types/interface/user.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl : string = "http://localhost:37724/api";
 isAuthenticated$ = new BehaviorSubject<any>(null);
 isAdmin$ = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient) {
    this.isAuthenticated$.next(JSON.parse(localStorage.getItem('isAuthenticated')))
    this.isAdmin$.next(JSON.parse(localStorage.getItem('isAdmin')))
   }



  login(email :string , password : string) : Observable <IUser>
  {
    return this.http.post<IUser>(`${this.baseUrl}/Auth/login`,{email:email , password:password}).pipe(catchError((err) => {
      return throwError (() => err.message || "Server error")
    }));
  }

  register(  firstName: string,lastName: string, username: string,email: string,password: string) : Observable <IUser>
  {
    return this.http.post<IUser>(`${this.baseUrl}/Auth/register`,{ firstName: firstName,lastName:lastName, username: username, email:email , password:password}).pipe(catchError((err) => {
      return throwError (() => err.message || "Server error")
    }));
  }
}
