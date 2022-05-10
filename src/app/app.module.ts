import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TodoComponent } from './todo/todo.component';
import { HttpIntercepterBasicAuthService } from './service/http/http-intercepter-basic-auth.service';
import { BroadbandComponent } from './screens/broadband/broadband.component';
import { DthComponent } from './screens/dth/dth.component';
import { RegisterComponent } from './register/register.component';
import { MobileComponent } from './screens/mobile/mobile.component';
import { PaymentComponent } from './payment/payment.component';
import { OrdersComponent } from './screens/orders/orders.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdminComponent } from './admin/admin/admin.component';
import { UsersComponent } from './admin/users/users.component';
import { PaymentsComponent } from './admin/payments/payments.component';
import { OrdersListComponent } from './admin/orders-list/orders-list.component';
import { GasComponent } from './screens/gas/gas.component';
import { ElectricityComponent } from './screens/electricity/electricity.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListTodosComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    TodoComponent,
    BroadbandComponent,
    DthComponent,
    RegisterComponent,
    MobileComponent,
    PaymentComponent,
    OrdersComponent,
    AdminComponent,
    UsersComponent,
    PaymentsComponent,
    OrdersListComponent,
    GasComponent,
    ElectricityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
