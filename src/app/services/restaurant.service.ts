import { Restaurant } from './../components/interfaces/restaurant.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private restaurantsUrl = '/api/v1/restaurants';
  private mockRestaurants = [
    {
      _id: '1',
      name: 'Foodworld',
      rating: 4.6,
      location: { long: -73.935242, lat: 40.73061 },
      startHours: '2025-07-25T08:00:00Z',
      endHours: '2025-07-25T22:00:00Z',
    },
    {
      _id: '2',
      name: 'Pizzahub',
      rating: 4.0,
      location: { long: -118.243683, lat: 34.052235 },
      startHours: '2025-07-25T10:00:00Z',
      endHours: '2025-07-25T23:00:00Z',
    },
    {
      _id: '3',
      name: 'Burger Haven',
      rating: 4.3,
      location: { long: -80.19179, lat: 25.76168 },
      startHours: '2025-07-25T09:00:00Z',
      endHours: '2025-07-25T21:00:00Z',
    },
    {
      _id: '4',
      name: 'Sushi Central',
      rating: 4.8,
      location: { long: -122.419418, lat: 37.774929 },
      startHours: '2025-07-25T11:00:00Z',
      endHours: '2025-07-25T23:00:00Z',
    },
    {
      _id: '5',
      name: 'Curry Kingdom',
      rating: 4.5,
      location: { long: -0.127758, lat: 51.507351 },
      startHours: '2025-07-25T12:00:00Z',
      endHours: '2025-07-25T22:30:00Z',
    },
    {
      _id: '6',
      name: 'Taco Fiesta',
      rating: 4.2,
      location: { long: -99.133209, lat: 19.432608 },
      startHours: '2025-07-25T08:00:00Z',
      endHours: '2025-07-25T20:00:00Z',
    },
    {
      _id: '7',
      name: 'The Vegan Bowl',
      rating: 4.7,
      location: { long: -3.70379, lat: 40.416775 },
      startHours: '2025-07-25T09:30:00Z',
      endHours: '2025-07-25T21:00:00Z',
    },
    {
      _id: '8',
      name: 'Grill & Chill',
      rating: 4.4,
      location: { long: 151.20929, lat: -33.86882 },
      startHours: '2025-07-25T10:00:00Z',
      endHours: '2025-07-25T22:00:00Z',
    },
    {
      _id: '9',
      name: 'Noodle House',
      rating: 4.1,
      location: { long: 139.691711, lat: 35.689487 },
      startHours: '2025-07-25T07:00:00Z',
      endHours: '2025-07-25T19:00:00Z',
    },
    {
      _id: '10',
      name: 'Brunch & Brew',
      rating: 4.9,
      location: { long: 2.352222, lat: 48.856613 },
      startHours: '2025-07-25T08:30:00Z',
      endHours: '2025-07-25T15:00:00Z',
    },
  ];
  data: Object = [];

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

  getMockRestaurants() {
    return this.mockRestaurants;
  }

  getMockRestaurantsHTTP() {
    return this.http.get<Restaurant[]>(
      'https://mocki.io/v1/9fca2d65-721b-4a93-bf46-b78e5a1682b3'
    );
  }
}
