import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/register/register.component';
import { BasicAuthenticationService } from 'src/app/service/basic-authentication.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  user: string;
  p : number = 1;
  deleteMessage :string;

  constructor(
    private adminService: AdminService,
    private router:Router,
    private basicAuthenticationService: BasicAuthenticationService
  ) {
    this.user = this.basicAuthenticationService.getAuthenticatedUser()!;
  }

  ngOnInit(): void {
    this.refreshUsers();
  }

  refreshUsers() {
    this.adminService.retrieveAllUsers().subscribe((response) => {
      this.users = response;
    });
  }

  deleteUser(id :number) {
    this.adminService.deleteUser(id).subscribe((response) => {
      this.deleteMessage = `Delete User ${id} Successful!`;
      this.refreshUsers();
    });
    console.log('delete '+id)
  }

  // updateTodo(id: any) {
  //   this.router.navigate(['order', id]);
  // }

  // addTodo() {
  //   this.router.navigate(['order', -1]);
  // }
}
