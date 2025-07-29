import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {HeroSectionComponent} from '../hero-section/hero-section.component';
import {FooterComponent} from '../footer/footer.component';
import {Card} from 'primeng/card';
import {Button} from 'primeng/button';
import {RestaurantService} from '../../services/restaurant.service';
import { Router } from '@angular/router';
import { Product } from '../../models/Product';
import { Restaurant } from '../../models/Restaurant';

@Component({
  selector: 'app-restaurant',
  imports: [
    HeaderComponent,
    HeroSectionComponent,
    FooterComponent,
    Card,
    Button
  ],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent implements AfterViewInit {

  constructor(private cdr: ChangeDetectorRef, private restaurantService: RestaurantService, private router: Router) {}

  address: string = '';
  login: Boolean = false;
  products: Product[] = [];
  restaurantData: Restaurant = {
    _id: '',
    name: '',
    rating: 0,
    location: { long: 0, lat: 0 },
    startHours: '',
    endHours: '',
    dishes: []
  };

  startHours: string = ''
  endHours: string = ''

  productTotal: number[] = []
  productQuantity: number[] = []

  resId: string = '';
  title: string = '';

  async ngAfterViewInit(): Promise<void> {
    this.address = localStorage.getItem('address') ?? '';  
    this.login = !!localStorage.getItem('loginToken');

    
    this.cdr.detectChanges()
    
    
    this.resId = this.router.url.split('/').pop() ?? ''    


    this.restaurantData = await this.restaurantService.getRestaurantById(this.resId)

    this.title = this.restaurantData.name
    this.products = this.restaurantData.dishes
    this.startHours = this.restaurantData.startHours.substring(11,16)
    this.endHours = this.restaurantData.endHours.substring(11,16)

    // this.title = await this.restaurantService.getRestaurantName(this.resId)
    // this.products = await this.restaurantService.getProducts(this.resId)

    
    for(let i = 0; i<this.products.length; i++){
      this.productTotal[i] = 0
      this.productQuantity[i] = 0
    }



    console.log(this.products);
    


  }

  incrementProduct(id: string) {
    const price = this.products.find(p => p.id === id)?.price ?? 0;

    this.productTotal[parseInt(id) - 1] += price;
    this.productQuantity[parseInt(id) - 1] += 1;
  }

  decrementProduct(id: string) {
    const price = this.products.find(p => p.id === id)?.price ?? 0;

    this.productTotal[parseInt(id) - 1] = Math.max(0, this.productTotal[parseInt(id) - 1] - price);
    this.productQuantity[parseInt(id) - 1] += 1;
  }

  addToOrder(){
    
  }

}
