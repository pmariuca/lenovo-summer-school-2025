import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {firstValueFrom, map,tap, Observable} from 'rxjs';
import { Product } from '../models/Product';
import { Restaurant } from '../models/Restaurant';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private restaurantsUrl = '/api/v1/restaurants';
  

  constructor(private http: HttpClient) {}

  async getRestaurants(): Promise<any[]> {
    try {
      const data = await firstValueFrom(
        this.http.get<any[]>(
          'https://mocki.io/v1/9fca2d65-721b-4a93-bf46-b78e5a1682b3'
        )
      );
      return data;
    } catch (error) {
      return [];
    }
  }

    getMockRestaurantsHTTP(): Observable<{ data: Restaurant[] }[]> {
    return this.http.get<{ data: Restaurant[] }[]>(
      'https://mocki.io/v1/e840893b-deff-422c-b824-5d1215f539f3'
    );
  }
}
