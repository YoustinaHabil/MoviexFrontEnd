
import { Component,OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
//import {Movies} from '../producer/Producers';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from '../Models/Movie';
import { CartService } from '../cart.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import * as moment from 'moment';
import { cinemas } from '../cinemas/Cinemas';
import { CinemaVM } from '../cinemas/CinemaVM';
import { Ticket } from './Ticket';
import { MovieVm } from '../Models/MovieVM';
import { CartVm } from '../cart/CartVm';
import { Cart } from '../cart/Cart';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent {
// user:IUser={
//   message: '',
//   isAuthenticated: true,
//   username: '',
//   email:'' ,
//   roles: ['admin'],
//   token:'',
//   expiresOn:''
//     }


cartItems:Cart={
 
  CartItemId: 0,
  Quantity: 0,
  DateTime: new Date,
  MovieId: 0,
  UserId: ''
}
  ticket:Ticket={

      seatNumber:0,
      serialCode:'',
      dateTime:  new Date,
     
}
  
  cinema:cinemas={
    Id: 0,
    Logo: '',
    Name: '',
    Description: ''
  };
  userId:string;
  isAuthenticated:Boolean;
  //cartItems:any;
  Movie:Movie={
    Id: 0,
    Name: "",
    Description: "",
    Price: 0,
    ImageURL: "",
    StartDate: new Date,
    EndDate: new Date,
    MovieCategory: 1,
    ActorIds: [ ],
    CinemaId: 0,
    ProducerId: 0
   }
   paymentForm:any;
   selectedDate : string;
   movieDate:Date;
   quantaty:number;
   concatenatedValue:string;
   
 // constructor(private formBuilder:FormBuilder,private MovieService:MovieService,private CartService:CartService, private router: Router,private route: ActivatedRoute){}

  constructor( private CartService:CartService,private MovieService: MovieService, private http: HttpClient, private router: Router,private route: ActivatedRoute) 
  {
   
  }



  ngOnInit(): void {

   const id = Number(this.route.snapshot.paramMap.get('id'));
     this.CartService.getById(id).subscribe(cartitem => {
       this.cartItems = cartitem.Data;
       console.log(this.cartItems);

    this.movieDate=cartitem.Data.CreatedAt;
    this.quantaty=cartitem.Data.Quantity;
     console.log(this.movieDate);


 
      this.http.get<MovieVm>(`http://localhost:37724/api/Movies/${this.cartItems.MovieId}`).subscribe(Movie => {
        this.Movie = Movie.Data;
        console.log(Movie);


      this.http.get<CinemaVM>(`http://localhost:37724/api/Cinemas/${this.Movie.CinemaId}`).subscribe(cinema => {
        this.cinema = cinema.Data;
        console.log(cinema);

        this.concatenatedValue=  "Q" + this.quantaty+"C"+ this.cartItems.CartItemId;

    });


    });


      });


    // const id = Number(this.route.snapshot.paramMap.get('id'));
    // this.MovieService.getById(id).subscribe(Movie => {
    //   this.Movie = Movie.Data;

    //  // this. categoryName = MovieCategory[this.Movie.MovieCategory];
    //   this.http.get<CinemaVM>(`http://localhost:5170/api/Cinemas/${this.Movie.CinemaId}`).subscribe(cinema => {
    //     this.cinema = cinema.Data;
    //});

  //});


  this.isAuthenticated= JSON.parse(localStorage.getItem('isAuthenticated'))
  this.userId= JSON.parse(localStorage.getItem('userId'))
  console.log(this.userId)




  }




  goBack() {
  this.router.navigate(['/Movie']);

}
BacktoOrders(){
  this.router.navigate(['/order']);
}
}