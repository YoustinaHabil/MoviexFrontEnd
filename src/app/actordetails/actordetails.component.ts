import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActorService } from '../actor.service';
import { ActorsComponent } from '../actors/actors.component';
import { Actors } from '../Models/Actor';
import { ResposeVM } from '../Models/ResponseVM';

@Component({
  selector: 'app-actordetails',
  templateUrl: './actordetails.component.html',
  styleUrls: ['./actordetails.component.scss']
})
export class ActordetailsComponent implements OnInit  {
  Actor: Actors = {
    Id: 0,
    ProfilePictureURL: '',
    FullName: '',
    Bio: ''
  };
  
  constructor(private ActorService: ActorService ,private _http:HttpClient, private router: Router,private route: ActivatedRoute){
  

  }
  
  ngOnInit(): void {
   
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.ActorService.getById(id).subscribe(Actor => {
      this.Actor = Actor.Data;
    }
   
  );
    }
    goBack() {
      this.router.navigate(['/Actor']);
    }
  }
  // GetActorDetails(index:number): void {
  //   let Actor=this.Actors[index];
  //   this._http.get<ResposeVM>('http://localhost:5170/api/Actors/'+Actor.Id).subscribe(response=>{
  //    this.Actors=response.Data;
  //  })
  // }
 

