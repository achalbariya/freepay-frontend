import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../app.constants';
import { User } from '../register/register.component';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  registerUser(user:User){
    return this.http.post(`${API_URL}/register`,user);
  }
}
