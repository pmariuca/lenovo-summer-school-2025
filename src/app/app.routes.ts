import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { OrderComponent } from './components/order/order.component';
import { AdminComponent } from './components/admin/admin.component';
import { authGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: '', redirectTo: 'login' , pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent, canActivate:[authGuard]},
    {path: 'restaurant', component: HomeComponent, canActivate: [authGuard]},
    { path: 'restaurant/:id', component: RestaurantComponent, canActivate: [authGuard] },
    {path: 'order', component: OrderComponent, canActivate: [authGuard]},
    {path: 'admin', component: AdminComponent, canActivate: [authGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
