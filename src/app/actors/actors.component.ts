import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actors } from '../Models/Actor';
//import { Actors } from '../Models/Actor';
import { ActorService } from '../actor.service';

import { ResposeVM } from '../Models/ResponseVM';
import { AuthService } from '../services/auth.service';
import { ActorVM } from './ActorVM';
//import{routes} from 'src/app/app.module'
//import { DataService } from './data.service';


@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})

export class ActorsComponent implements OnInit  {
  //data: DataModel[]=[];
  Actors: Actors[]=[];
  Actor: Actors = {
    Id: 0,
    ProfilePictureURL: '',
    FullName: '',
    Bio: ''
  };


  isAuthenticated: boolean = false;
  isAdmin:boolean
//list:any;

  // constructor(private dataService: DataService ){


  //   }
  constructor(private _http:HttpClient ,private ActorService:ActorService,private router: Router,private authService : AuthService){


   }

   ngOnInit():void{

 // this.list=this.dataService.getdata();

  this._http.get<ActorVM>('http://localhost:37724/api/Actors').subscribe(response=>{
     this.Actors=response.Data;
     this.isAdmin=JSON.parse(localStorage.getItem('isAdmin'))
   })



    // this.dataService.getData1().subscribe(data => {
    //   this.data = data;
    // });

   }
   delete(index:number){
    if(confirm('Are you sure to Delete this Actor')){



let Actor=this.Actors[index];

this._http.delete<ResposeVM>('http://localhost:37724/api/Actors/'+Actor.Id)
.subscribe(response=>{
  this.Actors.splice(index,1);});
  alert('Actor deleted Successfuly')}

   }

  //  gotodetails(index:number) {
  //   this.router.navigate(['/ActorDetails']);
  //   let Actor=this.Actors[index];
  //   this._http.get<ResposeVM>('http://localhost:5170/api/Actors/'+Actor.Id).subscribe(response=>{
  //    this.Actors=response.Data;
  //  })

  // }

  // getById(index:number){
  //   let Actor=this.Actors[index];
  //   this.ActorService.getById(index)
  //     .subscribe(
  //       response =>{
  //       this.Actor=response;
  //       },
  //       error=>{
  //         alert('error occurred');
  //       }
  //     );
  // }
  viewDetails(id: number) {
    this.router.navigate(['/details', id]);
  }
  updateProductDetails(id: number): void {
    this.router.navigate(['/update-actor', id]);
    this.isAuthenticated=true
    this.authService.isAuthenticated$.next(true);
    this.isAdmin=JSON.parse(localStorage.getItem('isAdmin'))
  }
}




