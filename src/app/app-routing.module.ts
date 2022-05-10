import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { OrdersListComponent } from './admin/orders-list/orders-list.component';
import { PaymentsComponent } from './admin/payments/payments.component';
import { UsersComponent } from './admin/users/users.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';
import { BroadbandComponent } from './screens/broadband/broadband.component';
import { DthComponent } from './screens/dth/dth.component';
import { ElectricityComponent } from './screens/electricity/electricity.component';
import { GasComponent } from './screens/gas/gas.component';
import { MobileComponent } from './screens/mobile/mobile.component';
import { OrdersComponent } from './screens/orders/orders.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodoComponent } from './todo/todo.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'welcome/:name', component: WelcomeComponent, canActivate:[RouteGuardService]},
  {path:'todos', component: ListTodosComponent, canActivate:[RouteGuardService]},
  {path:'orders', component: OrdersComponent, canActivate:[RouteGuardService]},
  {path:'mobile', component: MobileComponent, canActivate:[RouteGuardService]},
  {path:'gas', component: GasComponent, canActivate:[RouteGuardService]},
  {path:'electricity', component: ElectricityComponent, canActivate:[RouteGuardService]},
  {path:'dth', component: DthComponent, canActivate:[RouteGuardService]},
  {path:'payment', component: PaymentComponent, canActivate:[RouteGuardService]},
  {path:'broadband', component: BroadbandComponent, canActivate:[RouteGuardService]},
  {path:'logout', component: LogoutComponent, canActivate:[RouteGuardService]},
  {path:'todos/:id', component: TodoComponent, canActivate:[RouteGuardService]},
  {path:'admin', component: AdminComponent, canActivate:[RouteGuardService]},
  {path:'admin/orders', component: OrdersListComponent, canActivate:[RouteGuardService]},
  {path:'admin/payments', component: PaymentsComponent, canActivate:[RouteGuardService]},
  {path:'admin/users', component: UsersComponent, canActivate:[RouteGuardService]},
  {path:'**', component: ErrorComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
