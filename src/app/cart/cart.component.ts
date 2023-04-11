import { Component, Input, OnInit ,Renderer2, ViewChild,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Cart } from './Cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() movieData: any;

  userId:string;
  cartItems:any;
  cartData:Cart={
    CartItemId: 0,
    Quantity: 0,
    DateTime: undefined,
    MovieId: 0,
    UserId: ''
  }
 dd:any;
  constructor( private cartService:CartService,private router:Router ){}

  ngOnInit(): void {
    this.userId= JSON.parse(localStorage.getItem('userId'))

this.cartService.getCartItems(this.userId).subscribe({
  next:data => {
    console.log(data)
    this.cartItems=data.data
    console.log(this.cartItems)

  },      error:error => console.log(error) ,

    })
  }

  deleteFromCart(itemId,movieId,index){
    this.cartService.deleteFromCart(this.userId,movieId,1,itemId).subscribe({
      next:data => console.log(data),
      error:error => console.log(error) ,

    })
    {this.cartItems.splice(index,1)}
  }

  getTicket(id:number)
  {
    // this.cartService.deleteFromCart(this.userId,movieId,1,itemId).subscribe({
    //   next:data => console.log(data),
    //   error:error => console.log(error) ,
    // })

    this.router.navigate(['/ticket', id]);
  }

}

