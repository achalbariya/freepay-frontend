import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../screens/orders/orders.component';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { OrderService } from '../service/data/order.service';
import { PaymentService } from '../service/data/payment.service';

export class Payment {
  constructor(
    public paymentId: number,
    public username: string,
    public orderId: number,
    public cardType: string,
    public cardNumber: string,
    public expiryMonth: string,
    public expiryYear: string,
    public cvv: string
  ) {}
}

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  months: string[] = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];
  years: number[] = [2022, 2023, 2024, 2025, 2026];
  cardType: string;
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cvv: string;

  order: Order;
  payment: Payment;

  constructor(
    private orderService: OrderService,
    public basicAuthenticationService: BasicAuthenticationService,
    private router: Router,
    private paymentService:PaymentService,
    private route:ActivatedRoute,
  ) {
    this.orderService.lastOrders('achal').subscribe((data) => {
      this.order = data;
      console.log('payment update ' + data.orderId);
    });
  }

  ngOnInit(): void {}

  submitPayment() {
    this.payment = new Payment(
      0,
      this.order.username,
      this.order.orderId,
      this.cardType,
      this.cardNumber,
      this.expiryMonth,
      this.expiryYear,
      this.cvv
    );
    console.log(this.payment);
    this.paymentService.createPayment(this.payment).subscribe(
      data => {
        // console.log(data.paymentId)
        this.order.paymentId = data.paymentId;
        this.order.payment = 'Success';
        this.orderService.updateOrder(this.order.username,
          this.order.orderId,this.order).subscribe()
        alert("Recharge Successful")
        this.router.navigate(['orders']);
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
