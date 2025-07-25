import {AfterViewInit, Component, ChangeDetectorRef} from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {HeroSectionComponent} from '../hero-section/hero-section.component';
import {FooterComponent} from '../footer/footer.component';
import {Card} from 'primeng/card';
import {Button} from 'primeng/button';
import {RestaurantService} from '../../services/restaurant.service';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    HeroSectionComponent,
    FooterComponent,
    Card,
    Button
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  login: Boolean = false;
  address: String = '';
  restaurants: any[] = [];

  constructor(private cdr: ChangeDetectorRef, private restaurantService: RestaurantService) {}

  async ngAfterViewInit(): Promise<void> {
    this.login = !!localStorage.getItem('loginToken');

    this.restaurants = this.restaurantService.getMockRestaurants()
    this.cdr.detectChanges();

    const res = await this.restaurantService.getRestaurants()
    console.log(res)
  }

  handleAddress(address: String) {
    this.address = address;
    this.cdr.detectChanges();
  }

  visitRestaurant(_id: any) {
    console.log('visit', _id)
  }
}
