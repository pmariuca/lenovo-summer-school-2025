import {
  Component,
  AfterViewInit,
  ChangeDetectorRef,
  OnInit,
} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { FooterComponent } from '../footer/footer.component';
import { Card } from 'primeng/card';
import { Button } from 'primeng/button';
import { RestaurantService } from '../../services/restaurant.service';
import { Router } from '@angular/router';
import { Product } from '../../models/Product';
import { Restaurant } from '../../models/Restaurant';
import { NgIf } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'app-restaurant',
  imports: [
    HeaderComponent,
    HeroSectionComponent,
    FooterComponent,
    Card,
    Button,
    NgIf,
    DialogModule,
    Dialog,
    ButtonModule,
    InputTextModule
  ],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css',
})
export class RestaurantComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef, private restaurantService: RestaurantService, private router: Router) {}

  LSBasket: any = [];
  address: string = '';
  login: Boolean = false;
  products: Product[] = [];
  restaurantData: Restaurant = {
    id: '',
    name: '',
    rating: 0,
    location: { long: 0, lat: 0 },
    startHours: '',
    endHours: '',
    dishes: [],
  };

  startHours: string = '';
  endHours: string = '';

  productTotal: number[] = [];
  productQuantity: number[] = [];

  resId: string = '';
  title: string = '';


  showAddItems: boolean = false;

  visible: boolean = false;

   ngOnInit() {
    this.address = localStorage.getItem('address') ?? '';
    this.login = !!localStorage.getItem('loginToken');
    this.resId = this.router.url.split('/').pop() ?? ''

    this.restaurantService.getMockRestaurantsHTTP().subscribe(res => {
      const list = res;
      const found = list.find(r => r.id === this.resId);

      if (found) {

        this.restaurantData = found;

        this.title = this.restaurantData.name
        this.products = this.restaurantData.dishes
        this.startHours = this.restaurantData.startHours.substring(11,16)
        this.endHours = this.restaurantData.endHours.substring(11,16)


        for(let i = 0; i<this.products.length; i++){
          this.productTotal[i] = 0
          this.productQuantity[i] = 0
        }


        if(this.title.replace(/\s+/g, '').toLowerCase().includes(localStorage.getItem('userName') || ''))
          this.showAddItems = true

      } else {
        console.error(`No restaurant matches ID ${this.resId}`);
      }
    });


  }

  incrementProduct(id: string) {
    const price = this.products.find((p) => p.id === id)?.price ?? 0;

    this.productTotal[parseInt(id) - 1] += price;
    this.productQuantity[parseInt(id) - 1] += 1;
  }

  decrementProduct(id: string) {
    const price = this.products.find((p) => p.id === id)?.price ?? 0;

    this.productTotal[parseInt(id) - 1] = Math.max(0, this.productTotal[parseInt(id) - 1] - price);
    this.productQuantity[parseInt(id) - 1] -= 1;
  }

  addToOrder(product: Product) {
    const orderProduct = {
      ...product,
      quantity: this.productQuantity[Number.parseInt(product.id) - 1],
    };

    const basket = JSON.parse(localStorage.getItem('basket') || '[]');

    if (orderProduct.quantity > 0) {
      (basket as Array<any>).push(orderProduct);

      localStorage.setItem('basket', JSON.stringify(basket));
    }

    console.log(basket as Array<any>);
  }

  showDialog() {
        this.visible = true;
    }
}
