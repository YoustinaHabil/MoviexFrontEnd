import { Component,OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
//import {Movies} from '../producer/Producers';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from '../Models/Movie';
import { CartService } from '../cart.service';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent   {
  userId:string;
  isAuthenticated:Boolean;
  cartItems:any
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


  constructor(private formBuilder:FormBuilder,private MovieService:MovieService,private CartService:CartService,private _http:HttpClient, private router: Router,private route: ActivatedRoute){}


  ngOnInit(): void {
    this.paymentForm = this.formBuilder.group({
    cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
    nameOnCard: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+(([\'\,\.\-][a-zA-Z])?[a-zA-Z])$')]],
    expiryDate: ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$')]],
    securityCode: ['', [Validators.required, Validators.pattern('^[0-9]{3,4}$')]],

  });

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.MovieService.getById(id).subscribe(Movie => {
      this.Movie = Movie.Data;
    }
  );
  this.isAuthenticated= JSON.parse(localStorage.getItem('isAuthenticated'))
  this.userId= JSON.parse(localStorage.getItem('userId'))
  console.log(this.userId)
  }

  get cardNumber ()
  {
    return this.paymentForm.get('cardNumber');
  }

  get nameOnCard() {
    return this.paymentForm.get('nameOnCard');
  }

  get expiryDate() {
    return this.paymentForm.get('expiryDate');
  }
  get securityCode() {
    return this.paymentForm.get('securityCode');
  }

onAddToCart(movieId){
  this.CartService.addToCart(this.userId ,movieId,1).subscribe({
    next:cartItem => {
      console.log(cartItem)
      this.router.navigate(['/order']);

    },
    error:error => {console.log(error)
      this.router.navigate(['/order']);},


  });
}


isExpired(movie: Movie) {
  let check:boolean=false;
  if (new Date() > new Date(movie.EndDate)) {
    check=true;
  }
  return check;
}

// goBack() {
//   this.router.navigate(['/order']);
// }
}
