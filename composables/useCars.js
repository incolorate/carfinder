import cars from "@/data/cars.json";
import makes from "@/data/makes.json";
import listings from "@/data/listings.json";

export default function useCars() {
  return {
    cars,
    makes,
    listings,
  };
}
