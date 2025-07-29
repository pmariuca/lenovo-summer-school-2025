import { Product } from "./Product"

export type Restaurant = {
    _id: string,
    name: string,
    rating: number,
    location: { long: number, lat: number },
    startHours: string,
    endHours: string,
    dishes: Product[]
}