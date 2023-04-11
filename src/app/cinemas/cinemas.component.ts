import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cinemas } from './Cinemas';
import { CinemaVM } from './CinemaVM';


@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.scss']
})
export class CinemasComponent implements OnInit {

Cinemas: cinemas[]=[];
isAdmin:boolean

  constructor(private _http:HttpClient,private router: Router ){


  }
  ngOnInit(): void {
    this._http.get<CinemaVM>('http://localhost:37724/api/Cinemas').subscribe(response=>{
     this.Cinemas=response.Data;
     this.isAdmin=JSON.parse(localStorage.getItem('isAdmin'));
     console.log(this.isAdmin)
   })
  }
  delete(index:number){
    if(confirm('Are you sure to Delete this Cinema')){



let Cinema=this.Cinemas[index];

this._http.delete<CinemaVM>('http://localhost:37724/api/Cinemas/'+Cinema.Id)
.subscribe(response=>{
  this.Cinemas.splice(index,1);});
  alert('Cinema deleted Successfuly')}
  this.isAdmin=JSON.parse(localStorage.getItem('isAdmin'))

   }
   viewDetails(id: number) {
    this.router.navigate(['/cinemadetails', id]);
  }
  updateDetails(id: number): void {
    this.router.navigate(['/update-cinema', id]);
    this.isAdmin=JSON.parse(localStorage.getItem('isAdmin'))
  }

}
