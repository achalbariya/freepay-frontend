import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { RegisterService } from '../service/register.service';

export class User{
  constructor(
    public id:number,
    public username: string,
    public password: string
  ){

  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user : User;
  username :string;
  password :string;
  errorUsername :  boolean = false;


  constructor(private registerService:RegisterService,
    private router: Router,
    private basicAuthenticationService: BasicAuthenticationService
 ) { }

  ngOnInit(): void {
  }

  handleRegister(){
    this.user = new User(0,this.username,this.password)
        this.registerService.registerUser(this.user).subscribe(
          data => {
            console.log(data)
            this.handleLoginAfterRegister()
          },
          error => {
            console.log(error);
            this.errorUsername = true;
            // this.router.navigate(['register'])
          }
        ) 
    }

    handleLoginAfterRegister(){
    this.basicAuthenticationService
    .executeJWTAutheticationService(this.username, this.password)
    .subscribe(
      (data) => {
        console.log(data);
        alert("Registration Successful")
        this.router.navigate(['welcome', this.username]);
      }
    );
    }

}
