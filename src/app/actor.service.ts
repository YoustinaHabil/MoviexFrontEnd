import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Actors } from './Models/Actor';
import { ResposeVM } from './Models/ResponseVM';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  private baseUrl = 'http://localhost:37724/api/Actors/update';
  private createUrl='http://localhost:37724/api/Actors'

  Actors: Actors[]=[];
  ActorsUrl='http://localhost:37724/api/Actors'

  constructor(private httpClient:HttpClient) { }
  get () {
    return this.httpClient.get<Actors[]>('http://localhost:37724/api/Actors')

   }

  // getByID(id : number){
  //   return this.httpClient.get<Actors[]>('http://localhost:5170/api/Actors'+id)
  // }

  getById(id: number): Observable<ResposeVM> {
    const url = `${this.createUrl}/${id}`;
    return this.httpClient.get<ResposeVM>(url);
  }


  update(Actors: Actors): Observable<ResposeVM> {
    const url = `${this.baseUrl}/${Actors.Id}`;
    return this.httpClient.put<ResposeVM>(url, Actors);
  }
  // ADD(actor:Actors): Observable<ResposeVM> {
  //   const url = `${this.createUrl}`;
  //   return this.httpClient.post<ResposeVM>(url, actor);


  // }
  ADD(actor: Actors): Observable<Actors> {
    const url = `${this.createUrl}`;
    return this.httpClient.post<Actors>('http://localhost:37724/api/Actors', actor)
      .pipe(
        map(response => {
          this.Actors.push(actor);
          return response;
        })
      );
  }
  //ADD():void{
    //   let actor=new Actors();
    //   actor.FullName=fullName;
    //   //  actor.Id=id;
    //   //  actor.Bio=bio;
    //   //  actor.ProfilePictureURL=profilePicture
    //   this._http.post<ResposeVM>('http://localhost:5170/api/Actors',actor)
    //   .subscribe(
    //     response=>{
    //       this.Actors.push(actor);

    //     }




}

