import Pizza from "./Pizza";
import { Common } from "./PizzaFlavorsTypes";

interface PizzaCommon extends Pizza {
  flavor: Common
}

export default PizzaCommon;