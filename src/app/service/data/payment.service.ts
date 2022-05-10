import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';
import { Payment } from 'src/app/payment/payment.component';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private http: HttpClient,
    public basicAuthenticationService: BasicAuthenticationService
  ) { }

  retrieveAllPayments(username: any) {
    return this.http.get<Payment[]>(`${API_URL}/getPayments`);
  }

  createPayment(payment: Payment) {
    return this.http.post<Payment>(`${API_URL}/createPayment`, payment);
  }
}
