import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producers } from './Producers';
import { ProducerVM } from './ProducerVM';

@Component({
  selector: 'app-producer',
  templateUrl: './producer.component.html',
  styleUrls: ['./producer.component.scss']
})
export class ProducerComponent implements OnInit{
  Producers: Producers[]=[];
  isAdmin:boolean
  constructor(private _http:HttpClient,private router: Router ){


  }
  ngOnInit(): void {
    this._http.get<ProducerVM>('http://localhost:37724/api/Producers').subscribe(response=>{
     ;
     this.Producers=response.Data.Result;
     this.isAdmin=JSON.parse(localStorage.getItem('isAdmin'));
     console.log(this.isAdmin)
   })
  }
  delete(index:number){
    if(confirm('Are you sure to Delete this Producer')){



let producer=this.Producers[index];

this._http.delete<ProducerVM>('http://localhost:37724/api/Producers/'+producer.Id)
.subscribe(response=>{
  this.Producers.splice(index,1);});
  alert('Producer deleted Successfuly')}
   }
   viewDetails(id: number) {
    this.router.navigate(['/producer-details', id]);
  }
  updateDetails(id: number): void {

    this.router.navigate(['/update-producer', id]);

  }

}
