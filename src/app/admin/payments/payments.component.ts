import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payment } from 'src/app/payment/payment.component';
import { BasicAuthenticationService } from 'src/app/service/basic-authentication.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  payments: Payment[];
  user: string;
  emptyMessage : string = 'No payments AVAIABLE';
  noPayment : boolean = false;
  p : number = 1;

  constructor(
    private adminService: AdminService,
    private router:Router,
    private basicAuthenticationService: BasicAuthenticationService
  ) {
    this.user = this.basicAuthenticationService.getAuthenticatedUser()!;
  }

  ngOnInit(): void {
    this.refreshPaymengts();
  }

  refreshPaymengts() {
    this.adminService.retrieveAllPayments().subscribe((response) => {
      this.payments = response;
      if(this.payments.length==0){
        this.noPayment = true;
      }
    });
  }

  // deleteTodo(id: any) {
  //   this.todoService.deleteTodo(this.user, id).subscribe((response) => {
  //     this.deleteMessage = `Delete od Todo ${id} Successful!`;
  //     this.refreshTodos();
  //   });
  // }

  // updateTodo(id: any) {
  //   this.router.navigate(['order', id]);
  // }

  // addTodo() {
  //   this.router.navigate(['order', -1]);
  // }


}
