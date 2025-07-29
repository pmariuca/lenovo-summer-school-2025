import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { FooterComponent } from '../footer/footer.component';
import { Card } from 'primeng/card';
import { Button } from 'primeng/button';
import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../interfaces/restaurant.interface';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    HeroSectionComponent,
    FooterComponent,
    Card,
    Button,
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  login: Boolean = false;
  address: String = '';
  restaurants: Restaurant[] = [];

  constructor(private restaurantService: RestaurantService, private router: Router) {}

  ngOnInit(): void {
    this.login = !!localStorage.getItem('loginToken');

    this.restaurantService.getMockRestaurantsHTTP().subscribe({
      next: (res) => {
        console.log(res);
        this.restaurants = res;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  handleAddress(address: String) {
    this.address = address;
    localStorage.setItem('address', address.toString())
    this.cdr.detectChanges();
  }

  visitRestaurant(_id: any) {
    this.router.navigate(['restaurant', _id])
  }

  visitRestaurant(_id: any) {
    console.log('visit', _id);
  }
}
