import Pizza from "./Pizza";
import { Vegetarian } from "./PizzaFlavorsTypes";

interface PizzaVegetarian extends Pizza {
  flavor: Vegetarian
}

export default PizzaVegetarian;