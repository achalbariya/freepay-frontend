import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloBean{
  constructor(public message:string){}
}

@Injectable({
  providedIn: 'root',
})
export class WelcomeDataService {
  constructor(private http: HttpClient) {}

  executeHelloBean() {
    return this.http.get<HelloBean>('http://localhost:8080/hello');
  }

  executeHelloBeanWithVariable(name : any) {
    // let basicAuthHeaderString = this.createBasicAuthenticationHeader();
    // let headers = new HttpHeaders({
    //   Authorization:basicAuthHeaderString
    // })
    return this.http.get<HelloBean>(`http://localhost:8080/hello/${name}`,
    // {headers}
    );
  }

  // createBasicAuthenticationHeader(){
  //   let username = 'achal'
  //   let password = 'bariya'
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password); 
  //   return basicAuthHeaderString;
  // }
}
