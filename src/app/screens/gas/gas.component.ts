import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from 'src/app/service/basic-authentication.service';
import { OrderService } from 'src/app/service/data/order.service';
import { Order } from '../orders/orders.component';

@Component({
  selector: 'app-gas',
  templateUrl: './gas.component.html',
  styleUrls: ['./gas.component.css']
})
export class GasComponent implements OnInit {

  operators: string[] = ['BharatGas', 'HP Gas', 'Indane'];
  amounts: number[] = [500, 1000 ,2000];

  orderType: string = 'Gas';
  number: number;
  operator: string;
  amount: number;
  payment:string = 'Pending';
  username:string;

  public order: Order;

  constructor(public basicAuthenticationService :BasicAuthenticationService,
    public orderService:OrderService,
    private router:Router) {
      this.username = this.basicAuthenticationService.getAuthenticatedUser()!;
    }

  ngOnInit(): void {}

  rechargePayment(){
    this.order = new Order(0,this.basicAuthenticationService.getAuthenticatedUser()!,
    this.orderType,  this.operator , this.number.toString() , this.amount , new Date,this.payment,0);
    // console.log(this.order);
    this.orderService.createOrder(this.username,this.order).subscribe(
      data =>{
        // console.log(data);
        this.router.navigate(['payment']);
      }
    )
    
  }

  numberOnly(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

}
