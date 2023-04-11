import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { cinemas } from './cinemas/Cinemas';
import { CinemaVM } from './cinemas/CinemaVM';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {
  cinema:cinemas[]=[]
  cinemasUrl='http://localhost:37724/api/Cinemas'
  Url='http://localhost:37724/api/Cinemas/update'
  constructor(private httpClient:HttpClient) { }
  getById(id: number): Observable<CinemaVM> {
    const url = `${this.cinemasUrl}/${id}`;
    return this.httpClient.get<CinemaVM>(url);
  }

  update(cinemas: cinemas): Observable<CinemaVM> {
    const url = `${this.Url}/${cinemas.Id}`;
    return this.httpClient.put<CinemaVM>(url, cinemas);
  }
  ADD(cinema: cinemas): Observable<cinemas> {

    return this.httpClient.post<cinemas>('http://localhost:37724/api/Cinemas', cinema)
      .pipe(
        map(response => {
          this.cinema.push(cinema);
          return response;
        })
      );
  }
}
