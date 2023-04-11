import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
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
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
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
  producer:Producers={
    Id: 0,
    ProfilePictureURL: '',
    FullName: '',
    Bio: ''
  }
  cinema:cinemas={
    Id: 0,
    Logo: '',
    Name: '',
    Description: ''
  };
   actors:Actors[]=[];
   categoryName:string='';
  constructor(private movieService: MovieService ,private _http:HttpClient, private router: Router,private route: ActivatedRoute,private producerservies:ProducerService){


  }

  // ngOnInit(): void {
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  //   this.movieService.getById(id).subscribe(movie => {
  //     this.movie = movie.Data;


  //       this._http.get<CinemaVM>(`http://localhost:5170/api/Cinemas/`+movie.cinemaId).subscribe(CINEMA => {
  //         this.cinema = CINEMA.Data;
  //       });

  //   });
  // }

  // goBack() {
  //   this.router.navigate(['/Movie']);
  // }


  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getById(id).subscribe(movie => {
      this.movie = movie.Data;


        this. categoryName = MovieCategory[this.movie.MovieCategory];


        this._http.get<ProducerVM>(`http://localhost:37724/api/Producers/${this.movie.ProducerId}`).subscribe(producer => {

        this.producer = producer.Data;
        console.log(producer)

        });

        this._http.get<CinemaVM>(`http://localhost:37724/api/Cinemas/${this.movie.CinemaId}`).subscribe(cinema => {
          this.cinema = cinema.Data;
        });

          for (let actorId of this. movie.ActorIds) {
            this._http.get<ResposeVM>(`http://localhost:37724/api/Actors/${actorId}`).subscribe(actor => {
              this.actors.push(actor.Data);
            });
          }



    });
  }
  goBack() {
    this.router.navigate(['/Movie']);
    }

  isAvailable(movie: Movie) {
    let check:boolean=false;
    if (new Date() >= new Date(movie.StartDate) && new Date() <= new Date(movie.EndDate)) {
    check=true;
    }
    return check;
  }
  isExpired(movie: Movie) {
    let check:boolean=false;
    if (new Date() >new Date(movie.EndDate)) {
    check=true;
    }
    return check;
  }

  isUpcoming(movie: Movie) {
    let check:boolean=false;
    if (new Date() <new Date(movie.StartDate)) {
    check=true;
    }
    return check;
  }

  }




