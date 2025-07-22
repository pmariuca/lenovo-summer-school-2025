import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { OrderComponent } from './components/order/order.component';
import { AdminComponent } from './components/admin/admin.component';

export const routes: Routes = [
    {path: '', redirectTo: 'login' , pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'restaurant', component: RestaurantComponent},
    {path: 'order', component: OrderComponent},
    {path: 'admin', component: AdminComponent},
];
