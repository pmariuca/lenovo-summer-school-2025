import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Product } from '../models/Product';
import { Restaurant } from '../models/Restaurant';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private restaurantsUrl = '/api/v1/restaurants';
  private mockRestaurants = [
    {
      data: [
        {
          _id: '1',
          name: 'La Bella Cucina',
          rating: 5,
          location: { long: -73.935242, lat: 40.73061 },
          startHours: '2023-01-01T10:00:00Z',
          endHours: '2023-01-01T22:00:00Z',
          dishes: [
            {
              id: '1',
              name: 'Spaghetti Carbonara',
              description:
                'Classic Italian pasta with creamy sauce and pancetta',
              price: 18,
            },
            {
              id: '2',
              name: 'Tiramisu',
              description: 'Traditional coffee-flavored Italian dessert',
              price: 8,
            },
          ],
        },
        {
          _id: '2',
          name: 'Sushi Zen',
          rating: 4,
          location: { long: 139.691711, lat: 35.689487 },
          startHours: '2023-01-01T11:00:00Z',
          endHours: '2023-01-01T23:00:00Z',
          dishes: [
            {
              id: '1',
              name: 'Salmon Nigiri',
              description: 'Fresh salmon over vinegared rice',
              price: 12,
            },
            {
              id: '2',
              name: 'Miso Soup',
              description: 'Traditional Japanese soup with tofu and seaweed',
              price: 5,
            },
          ],
        },
        {
          _id: '3',
          name: 'Taco Fiesta',
          rating: 4,
          location: { long: -99.133209, lat: 19.432608 },
          startHours: '2023-01-01T09:00:00Z',
          endHours: '2023-01-01T21:00:00Z',
          dishes: [
            {
              id: '1',
              name: 'Beef Tacos',
              description:
                'Corn tortillas filled with seasoned beef and toppings',
              price: 10,
            },
            {
              id: '2',
              name: 'Churros',
              description: 'Fried dough pastry with cinnamon sugar',
              price: 6,
            },
          ],
        },
        {
          _id: '4',
          name: 'Curry House',
          rating: 5,
          location: { long: 77.209021, lat: 28.613939 },
          startHours: '2023-01-01T12:00:00Z',
          endHours: '2023-01-01T22:00:00Z',
          dishes: [
            {
              id: '1',
              name: 'Butter Chicken',
              description: 'Creamy tomato-based chicken curry',
              price: 15,
            },
            {
              id: '2',
              name: 'Garlic Naan',
              description: 'Leavened flatbread with garlic',
              price: 4,
            },
          ],
        },
        {
          _id: '5',
          name: 'Le Gourmet',
          rating: 5,
          location: { long: 2.352222, lat: 48.856613 },
          startHours: '2023-01-01T17:00:00Z',
          endHours: '2023-01-01T23:00:00Z',
          dishes: [
            {
              id: '1',
              name: 'Duck Confit',
              description: 'Slow-cooked duck leg with crispy skin',
              price: 25,
            },
            {
              id: '2',
              name: 'Crème Brûlée',
              description: 'Rich custard base topped with caramelized sugar',
              price: 9,
            },
          ],
        },
      ],
    },
    // {
    //   _id: '1',
    //   name: 'Foodworld',
    //   rating: 4.6,
    //   location: { long: -73.935242, lat: 40.73061 },
    //   startHours: '2025-07-25T08:00:00Z',
    //   endHours: '2025-07-25T22:00:00Z',
    // },
    // {
    //   _id: '2',
    //   name: 'Pizzahub',
    //   rating: 4.0,
    //   location: { long: -118.243683, lat: 34.052235 },
    //   startHours: '2025-07-25T10:00:00Z',
    //   endHours: '2025-07-25T23:00:00Z',
    // },
    // {
    //   _id: '3',
    //   name: 'Burger Haven',
    //   rating: 4.3,
    //   location: { long: -80.19179, lat: 25.76168 },
    //   startHours: '2025-07-25T09:00:00Z',
    //   endHours: '2025-07-25T21:00:00Z',
    // },
    // {
    //   _id: '4',
    //   name: 'Sushi Central',
    //   rating: 4.8,
    //   location: { long: -122.419418, lat: 37.774929 },
    //   startHours: '2025-07-25T11:00:00Z',
    //   endHours: '2025-07-25T23:00:00Z',
    // },
    // {
    //   _id: '5',
    //   name: 'Curry Kingdom',
    //   rating: 4.5,
    //   location: { long: -0.127758, lat: 51.507351 },
    //   startHours: '2025-07-25T12:00:00Z',
    //   endHours: '2025-07-25T22:30:00Z',
    // },
    // {
    //   _id: '6',
    //   name: 'Taco Fiesta',
    //   rating: 4.2,
    //   location: { long: -99.133209, lat: 19.432608 },
    //   startHours: '2025-07-25T08:00:00Z',
    //   endHours: '2025-07-25T20:00:00Z',
    // },
    // {
    //   _id: '7',
    //   name: 'The Vegan Bowl',
    //   rating: 4.7,
    //   location: { long: -3.70379, lat: 40.416775 },
    //   startHours: '2025-07-25T09:30:00Z',
    //   endHours: '2025-07-25T21:00:00Z',
    // },
    // {
    //   _id: '8',
    //   name: 'Grill & Chill',
    //   rating: 4.4,
    //   location: { long: 151.20929, lat: -33.86882 },
    //   startHours: '2025-07-25T10:00:00Z',
    //   endHours: '2025-07-25T22:00:00Z',
    // },
    // {
    //   _id: '9',
    //   name: 'Noodle House',
    //   rating: 4.1,
    //   location: { long: 139.691711, lat: 35.689487 },
    //   startHours: '2025-07-25T07:00:00Z',
    //   endHours: '2025-07-25T19:00:00Z',
    // },
    // {
    //   _id: '10',
    //   name: 'Brunch & Brew',
    //   rating: 4.9,
    //   location: { long: 2.352222, lat: 48.856613 },
    //   startHours: '2025-07-25T08:30:00Z',
    //   endHours: '2025-07-25T15:00:00Z',
    // },
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
    return this.mockRestaurants[0].data;
  }

  getRestaurantById(_id: string): Restaurant {
    const found = this.mockRestaurants[0].data.find((r) => r._id === _id);

    if (!found) {
      throw new Error(`Restaurant with id ${_id} not found`);
    }

    return found;
  }

  getProducts(_id: string): Product[] {
    return (
      this.mockRestaurants[0].data.find((restaurant) => restaurant._id == _id)
        ?.dishes ?? []
    );
  }

  getRestaurantName(_id: string): string {
    return (
      this.mockRestaurants[0].data.find((restaurant) => restaurant._id == _id)
        ?.name ?? ''
    );
  }

  getMockRestaurantsHTTP() {
    return this.http.get<Restaurant[]>(
      'https://mocki.io/v1/9fca2d65-721b-4a93-bf46-b78e5a1682b3'
    );
  }
}
