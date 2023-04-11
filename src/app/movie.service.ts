import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CinemaVM } from './cinemas/CinemaVM';
import { Movie } from './Models/Movie';
import { MovieVm } from './Models/MovieVM';
import { ResposeVM } from './Models/ResponseVM';
import { ProducerVM } from './producer/ProducerVM';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  Movie:Movie[]=[]
  producerUrl='http://localhost:37724/api/Producers'
  MovieUrl='http://localhost:37724/api/Movies'
  // MovieUrl='http://localhost:37724/api/Movies'
  baseUrl='http://localhost:37724/api/Movies'
  apiURL='http://localhost:37724/api/Movies'
  cinemasUrl='http://localhost:37724/api/Cinemas'
  private createUrl='http://localhost:37724/api/Actors'
  constructor( private httpClient:HttpClient) { }
  getById(id: number): Observable<MovieVm> {
    const url = `${this.MovieUrl}/${id}`;
    return this.httpClient.get<MovieVm>(url);
  }

  getproducerById(id: number): Observable<ProducerVM> {
    const url = `${this.producerUrl}/${id}`;
    return this.httpClient.get<ProducerVM>(url);
  }
  getcinemaById(id: number): Observable<CinemaVM> {
    const url = `${this.cinemasUrl}/${id}`;
    return this.httpClient.get<CinemaVM>(url);
  }
  getactorById(id: number): Observable<ResposeVM> {
    const url = `${this.createUrl}/${id}`;
    return this.httpClient.get<ResposeVM>(url);
  }
  getMovies(categoryName: string) {
    return this.httpClient.get<MovieVm>('${this.MovieUrl}/?categoryName=${categoryName}');
  }
  update(movie: Movie): Observable< MovieVm> {
    const url = `${this.baseUrl}/${movie.Id}`;
    return this.httpClient.put<MovieVm>(url, movie);
  }
  createMovie(movie: Movie): Observable<Movie> {
    return this.httpClient.post<Movie>(this. apiURL, movie);
  }
  ADD(movie: Movie): Observable<Movie> {

    return this.httpClient.post<Movie>('http://localhost:37724/api/Movies', movie)
      .pipe(
        map(response => {
          this.Movie.push(movie);
          return response;
        })
      );
  }

}
