import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from 'src/app/service/basic-authentication.service';
import { OrderService } from 'src/app/service/data/order.service';
import {NgxPaginationModule} from 'ngx-pagination';

export class Order {
  constructor(
    public orderId: number,
    public username: string,
    public orderType: string,
    public operator: string,
    public number: string,
    public amount: number,
    public orderDate: Date,
    public payment: string,
    public paymentId: number
  ) {}
}
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orders: Order[];
  user: string;
  emptyMessage : string = 'No orders Please Recharge first';
  noOrder : boolean = false;
  p : number = 1;

  constructor(
    private orderService: OrderService,
    private router:Router,
    private basicAuthenticationService: BasicAuthenticationService
  ) {
    this.user = this.basicAuthenticationService.getAuthenticatedUser()!;
  }

  ngOnInit(): void {
    this.refreshOrders();
  }

  refreshOrders() {
    this.orderService.retrieveAllOrders(this.user).subscribe((response) => {
      this.orders = response;
      if(this.orders.length==0){
        this.noOrder = true;
      }
    });
  }

}
