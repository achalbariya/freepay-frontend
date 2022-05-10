import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/screens/orders/orders.component';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  totalOrders : number;
  totalPayments : number;
  totalUsers : number;
  totalAmount : number;

  constructor(
    private adminService:AdminService
  ) { 
    this.adminService.retrieveTotalOrders().subscribe((response) => { this.totalOrders = response; });
    this.adminService.retrieveTotalUsers().subscribe((response) => { this.totalUsers = response; });
    this.adminService.retrieveTotalPayments().subscribe((response) => { this.totalPayments = response; });
    this.adminService.retrieveTotalAmount().subscribe((response) => { this.totalAmount = response; });
  }

  ngOnInit(): void {
  }
  

}
