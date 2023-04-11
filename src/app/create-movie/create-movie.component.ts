// import { HttpClient } from '@angular/common/http';
// import { Component } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { cinemas } from '../cinemas/Cinemas';
// import { CinemaVM } from '../cinemas/CinemaVM';
// import { Actors } from '../Models/Actor';
// import { Movie } from '../Models/Movie';
// import { MovieCategory } from '../Models/MovieCategory';
// import { ResposeVM } from '../Models/ResponseVM';
// import { MovieService } from '../movie.service';
// import { ProducerService } from '../producer.service';
// import { Producers } from '../producer/Producers';
// import { ProducerVM } from '../producer/ProducerVM';

// @Component({
//   selector: 'app-create-movie',
//   templateUrl: './create-movie.component.html',
//   styleUrls: ['./create-movie.component.scss']
// })
// export class CreateMovieComponent {



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
//   // goBack() {
//   //   this.router.navigate(['/Movie']);
//   // }
//   MovieForm!: FormGroup;
//   submitted = false;

//   constructor(
//     private formBuilder: FormBuilder,
//     private movieService:MovieService,
//     private router: Router,private fb: FormBuilder,private _http:HttpClient
//   ) {

//   }

//   ngOnInit(): void {
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
//   onSubmit() {
//     console.log(this.MovieForm.value);
//     this.movieService.ADD(this.MovieForm.value).subscribe(res => {
//     this.router.navigate(['/movies']);
//   });}


// }


import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { cinemas } from '../cinemas/Cinemas';
import { CinemaVM } from '../cinemas/CinemaVM';
import { Actors } from '../Models/Actor';
import { Movie } from '../Models/Movie';
import { MovieCategory } from '../Models/MovieCategory';
import { ResposeVM } from '../Models/ResponseVM';
import { MovieService } from '../movie.service';
import { ProducerService } from '../producer.service';
import { Producers } from '../producer/Producers';
import { ProducerVM } from '../producer/ProducerVM';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.scss']
})
export class CreateMovieComponent {



  movie:Movie={
    ActorIds:[],
    CinemaId:0,
    ProducerId:0,
    Id: 0,
    Name: '',
    Description: '',
    Price: 0,
    ImageURL: '',
    StartDate: new Date,
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
  // goBack() {
  //   this.router.navigate(['/Movie']);
  // }
  MovieForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private movieService:MovieService,

    private router: Router,private fb: FormBuilder,private _http:HttpClient
  ) {
    this.MovieForm = this.fb.group({


     Name:['', Validators.required],
     Description:['', Validators.required],
     Price:[0, Validators.required],
     ImageURL:['', Validators.required],
     StartDate: [new Date],
     EndDate: [new Date],
     MovieCategory:[0, Validators.required],
     ActorIds:[[[]], Validators.required],
     CinemaId:[0, Validators.required],
     ProducerId:[0, Validators.required],

    });
  }

  ngOnInit(): void {
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
  onSubmit() {
    console.log(this.MovieForm.value);
    this.movieService.ADD(this.MovieForm.value).subscribe(res => {
    this.router.navigate(['/Movie']);
  });}


}
