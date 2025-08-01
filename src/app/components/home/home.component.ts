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
  address: string = '';
  restaurants: Restaurant[] = [];
  photoPath = '/restaurant/'

  constructor(
    private restaurantService: RestaurantService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.login = !!localStorage.getItem('loginToken');

    this.address = localStorage.getItem('address') || '';

    this.restaurantService.getMockRestaurantsHTTP().subscribe({
      next: (res) => {
        this.restaurants = res;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  handleAddress(address: string) {
    this.address = address;
    localStorage.setItem('address', address.toString());
  }

  visitRestaurant(id: any) {
    this.router.navigate(['restaurant', id])
  }

}
