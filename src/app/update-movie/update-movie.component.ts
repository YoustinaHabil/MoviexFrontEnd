// import { Component } from '@angular/core';
// import { FormGroup, FormBuilder } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ActorService } from '../actor.service';
// import { cinemas } from '../cinemas/Cinemas';
// import { Actors } from '../Models/Actor';
// import { Movie } from '../Models/Movie';
// import { MovieService } from '../movie.service';
// import { Producers } from '../producer/Producers';
// import { DatePipe } from '@angular/common';
// import { HttpClient } from '@angular/common/http';
// import { CinemaVM } from '../cinemas/CinemaVM';
// import { ProducerVM } from '../producer/ProducerVM';
// import { ResposeVM } from '../Models/ResponseVM';

// @Component({
//   selector: 'app-update-movie',
//   templateUrl: './update-movie.component.html',
//   styleUrls: ['./update-movie.component.scss']
// })
// export class UpdateMovieComponent {
//   [x: string]: any;
//   updateForm: FormGroup | undefined;
//   id?: number;
//   movie:Movie={
//     ActorIds:[],
//     CinemaId:0,
//     ProducerId:0,
//     Id: 0,
//     Name: '',
//     Description: '',
//     Price: 0,
//     ImageURL: '',
//     StartDate: new Date,
//     EndDate: new Date,
//     MovieCategory: 0,


//   }
//   categories = [
//     { name: 'Action', value: 1 },
//     { name: 'Comedy', value: 2 },
//     { name: ' Drama', value: 3 },
//     { name: 'Documentary', value: 4 },
//     { name: 'Cartoon', value: 5 },
//     { name: 'Horror', value: 6 }
//   ];
//   Actors:Actors[]=[];
//   producers: Producers[]=[];
//   cinema:cinemas[]=[];
//   datePipe = new DatePipe('en-US');
//   constructor(private route: ActivatedRoute, private router: Router, private MovieService:MovieService ,private _http:HttpClient) { }
//   ngOnInit(): void {



//     this.id = Number(this.route.snapshot.paramMap.get('id'));
//     this.MovieService.getById(this.id).subscribe(movie => {
//       movie.Data.StartDate = new Date(movie.Data.StartDate);
//       movie.Data.EndDate = new Date(movie.Data.EndDate);
//       this.movie = movie.Data;


//     });

//     this._http.get<ResposeVM>('http://localhost:37724/api/Actors').subscribe(response=>{
//       this.Actors=response.Data;
//     })
//     this._http.get<ProducerVM>('http://localhost:37724/api/Producers').subscribe(response=>{
//       this.producers=response.Data;
//     })
//     this._http.get<CinemaVM>('http://localhost:37724/api/Cinemas').subscribe(response=>{
//      this.cinema=response.Data;
//    })
//   }

//   onSubmit(): void {

//     this.movie.StartDate = new Date(this.movie.StartDate);
//     this.movie.EndDate = new Date(this.movie.EndDate);
//     this.MovieService.update(this.movie).subscribe(() => {
//       this.router.navigate(['/Movie']);
//     });
//   }
// }

import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActorService } from '../actor.service';
import { cinemas } from '../cinemas/Cinemas';
import { Actors } from '../Models/Actor';
import { Movie } from '../Models/Movie';
import { MovieService } from '../movie.service';
import { Producers } from '../producer/Producers';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CinemaVM } from '../cinemas/CinemaVM';
import { ProducerVM } from '../producer/ProducerVM';
import { ResposeVM } from '../Models/ResponseVM';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.scss']
})
export class UpdateMovieComponent {
  [x: string]: any;
  updateForm: FormGroup | undefined;
  id?: number;
  movie:Movie={
    ActorIds:[],
    CinemaId:0,
    ProducerId:0,
    Id: 0,
    Name: '',
    Description: '',
    Price: 0,
    ImageURL: '',
    StartDate:new Date,
    EndDate: new Date,
    MovieCategory: 0,


  }
  categories = [
    { name: 'Action', value: 1 },
    { name: 'Comedy', value: 2 },
    { name: ' Drama', value: 3 },
    { name: 'Documentary', value: 4 },
    { name: 'Cartoon', value: 5 },
    { name: 'Horror', value: 6 }
  ];
  Actors:Actors[]=[];
  producers: Producers[]=[];
  cinema:cinemas[]=[];
  datePipe = new DatePipe('en-US');

  constructor(private route: ActivatedRoute, private router: Router, private MovieService:MovieService ,private _http:HttpClient) { }
  ngOnInit(): void {



    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.MovieService.getById(this.id).subscribe(movie => {
      movie.Data.StartDate= this.datePipe.transform(this.movie.StartDate, 'yyyy-MM-dd');
      movie.Data.EndDate= this.datePipe.transform(this.movie.EndDate, 'yyyy-MM-dd');

      this.movie = movie.Data;


    });

    this._http.get<ResposeVM>('http://localhost:37724/api/Actors').subscribe(response=>{
      this.Actors=response.Data;
    })
    this._http.get<ProducerVM>('http://localhost:37724/api/Producers').subscribe(response=>{
      this.producers=response.Data.Result;
    })
    this._http.get<CinemaVM>('http://localhost:37724/api/Cinemas').subscribe(response=>{
     this.cinema=response.Data;
   })
  }

  onSubmit(): void {


    this.MovieService.update(this.movie).subscribe(() => {
      console.error(this.movie)
      console.log(this.movie)

      this.router.navigate(['/Movie']);
    });
  }
}
