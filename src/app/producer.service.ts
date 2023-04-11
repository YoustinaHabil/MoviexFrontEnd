import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Producers } from './producer/Producers';
import { ProducerVM } from './producer/ProducerVM';

@Injectable({
  providedIn: 'root'
})
export class ProducerService {
  producer:Producers[]=[]

  constructor(private httpClient:HttpClient) { }
  Url='http://localhost:37724/api/Producers'
  baseUrl='http://localhost:37724/api/Producers/update'
  createUrl='http://localhost:37724/api/Producers'

  getById(id: number): Observable<ProducerVM> {
    const url = `${this.Url}/${id}`;
    return this.httpClient.get<ProducerVM>(url);
  }


  update(producer: Producers): Observable<ProducerVM> {
    const url = `${this.baseUrl}/${producer.Id}`;
    return this.httpClient.put<ProducerVM>(url, producer);
  }

  ADD(producer: Producers): Observable<Producers> {

    return this.httpClient.post<Producers>('http://localhost:37724/api/Producers', producer)
      .pipe(
        map(response => {
          this.producer.push(producer);
          return response;
        })
      );
  }
}
