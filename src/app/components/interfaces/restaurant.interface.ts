export interface Restaurant {
  _id: string;
  name: string;
  rating: number;
  startHours: string;
  endHours: string;
  location: { long: number; lat: number };
}
