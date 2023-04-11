import { Time } from "@angular/common";

export class Movie {
    ActorIds:[]=[];
    CinemaId:number=0
    ProducerId:number=0
    Id:number=0;
    Name:string="";
    Description:string="";
    Price:number=0
    ImageURL:string="";
    StartDate: Date=new Date;
    EndDate: Date=new Date;
    MovieCategory:number=0;
   
}