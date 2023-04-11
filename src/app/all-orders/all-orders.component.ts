import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.scss']
})
export class AllOrdersComponent {
  orders: any = [];
  errorMessage:any
  checked:boolean

  constructor(private _http:HttpClient,private router: Router ,private ordersService: OrdersService ,
     private route:ActivatedRoute){


  }
  ngOnInit(): void {
    this.ordersService.getUsersOrders().subscribe({

      next:data => {this.orders=data.data},
      error:error => this.errorMessage = error,

    })
}}
