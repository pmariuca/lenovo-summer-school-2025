import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {firstValueFrom, map,tap, Observable} from 'rxjs';
import { Product } from '../models/Product';
import { Restaurant } from '../models/Restaurant';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private restaurantsUrl = '/api/restaurant';


  constructor(private http: HttpClient) {}

  getMockRestaurantsHTTP(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(
      `http://localhost:3000${this.restaurantsUrl}`
    );
  }
}
