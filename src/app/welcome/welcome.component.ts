import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelloBean, WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = ''
  welcomeMessage = ''

  constructor(private route:ActivatedRoute,
    private welcomeDataService:WelcomeDataService) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage(){
    this.welcomeDataService.executeHelloBean().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  getWelcomeMessageWithVariable(){
    this.welcomeDataService.executeHelloBeanWithVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleErrorResponse(error: any) {
    this.welcomeMessage = error.error.message;
  }

  handleSuccessfulResponse(response: any){
    this.welcomeMessage = response.message;
  }

}
