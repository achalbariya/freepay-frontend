import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';
import { Order } from 'src/app/screens/orders/orders.component';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  public order: Order;

  constructor(
    private http: HttpClient,
    public basicAuthenticationService: BasicAuthenticationService
  ) {}

  retrieveAllOrders(username: any) {
    return this.http.get<Order[]>(`${API_URL}/users/${username}/orders`);
  }

  // deleteOrder(username : string,id :number){
  //   return this.http.delete(`${API_URL}/users/${username}/todos/${id}`);
  // }

  retrieveOrder(username: string, id: number) {
    return this.http.get<Order>(`${API_URL}/users/${username}/orders/${id}`);
  }

  updateOrder(username: string, id: number, order: Order) {
    return this.http.put(`${API_URL}/users/${username}/orders/${id}`, order);
  }

  createOrder(username: string, order: Order) {
    return this.http.post(`${API_URL}/users/${username}/orders`, order);
  }

  lastOrders(username: string) {
    return this.http.get<Order>(`${API_URL}/users/${username}/orders/last`);
  }
}
