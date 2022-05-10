import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticateUser'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http:HttpClient) { }

  executeJWTAutheticationService(username :string ,password :string) {
   
    return this.http.post<any>(`${API_URL}/authenticate`,{
      username,
      password
    }).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER,username);
          sessionStorage.setItem(TOKEN,`Bearer ${data.token}`);
          return data;
        }
      )
    );
  }

    executeAutheticationService(username :string ,password :string) {
      let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password); 
      let headers = new HttpHeaders({
        Authorization:basicAuthHeaderString
      })
      return this.http.get<AuthenticationBean>(`${API_URL}/basicAuth`,
      {headers}).pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER,username);
            sessionStorage.setItem(TOKEN,basicAuthHeaderString);
            return data;
          }
        )
      );
    }
  
    getAuthenticatedUser(){
      return sessionStorage.getItem(AUTHENTICATED_USER)
    }

    getAuthenticatedToken(){
      if(this.getAuthenticatedUser())
        return sessionStorage.getItem(TOKEN)
      return null
    }

    isUserLoggedIn(){
      let user = sessionStorage.getItem(AUTHENTICATED_USER)
      return !(user===null)
    }

    logout(){
      sessionStorage.removeItem(AUTHENTICATED_USER)
      sessionStorage.removeItem(TOKEN)
    }
}

export class AuthenticationBean{
  constructor(public message:string){

  }
}