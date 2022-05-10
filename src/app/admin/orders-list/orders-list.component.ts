import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/screens/orders/orders.component';
import { BasicAuthenticationService } from 'src/app/service/basic-authentication.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

  orders: Order[];
  user: string;
  emptyMessage : string = 'No orders';
  noOrder : boolean = false;
  p : number = 1;

  constructor(
    private adminService: AdminService,
    private router:Router,
    private basicAuthenticationService: BasicAuthenticationService
  ) {
    this.user = this.basicAuthenticationService.getAuthenticatedUser()!;
  }

  ngOnInit(): void {
    this.refreshOrders();
  }

  refreshOrders() {
    this.adminService.retrieveAllOrders().subscribe((response) => {
      this.orders = response;
      if(this.orders.length==0){
        this.noOrder = true;
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
