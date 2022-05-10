import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{
  constructor(
    public id:  number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos : Todo[] = [];
  deleteMessage : string ='';
  user : string;
  // = [
  //   new Todo(1,'Learn to dance',false,new Date()),
  //   new Todo(2,'Learn to rock',false,new Date()),
  //   new Todo(3,'Learn to sing',false,new Date()),
  //   new Todo(4,'Learn to burp',false,new Date())
  // ]

  constructor(private todoService:TodoDataService,
    private router:Router,
    private basicAuthenticationService: BasicAuthenticationService) { 

      this.user = this.basicAuthenticationService.getAuthenticatedUser()!;
    }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos(this.user).subscribe(
      response => {
        this.todos = response;
      }
    );
  }

  deleteTodo(id :any){
    this.todoService.deleteTodo(this.user,id).subscribe(
      response => {
         this.deleteMessage = `Delete od Todo ${id} Successful!`;
         this.refreshTodos();
      }
    )
  }

  updateTodo(id:any){
    this.router.navigate(['todos',id])
  }

  addTodo(){
    this.router.navigate(['todos',-1])
  }
}
