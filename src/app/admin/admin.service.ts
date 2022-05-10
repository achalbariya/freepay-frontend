import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../app.constants';
import { Payment } from '../payment/payment.component';
import { User } from '../register/register.component';
import { Order } from '../screens/orders/orders.component';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http: HttpClient,
    public basicAuthenticationService: BasicAuthenticationService
  ) {}

  retrieveAllOrders() {
    return this.http.get<Order[]>(`${API_URL}/admin/orders`);
  }
  retrieveTotalOrders() {
    return this.http.get<number>(`${API_URL}/admin/totalsOrders`);
  }
  retrieveAllUsers() {
    return this.http.get<User[]>(`${API_URL}/admin/users`);
  }
  retrieveTotalUsers() {
    return this.http.get<number>(`${API_URL}/admin/totalsUsers`);
  }
  deleteUser(id : any){
    return this.http.delete(`${API_URL}/admin/users/${id}`);
  }

  retrieveAllPayments() {
    return this.http.get<Payment[]>(`${API_URL}/admin/payments`);
  }
  retrieveTotalPayments() {
    return this.http.get<number>(`${API_URL}/admin/totalsPayments`);
  }

  retrieveTotalAmount() {
    return this.http.get<number>(`${API_URL}/admin/totalAmount`);
  }

}
