export interface IRestaurant {
  name: string;
  category: string;
  openingTime: string;
  closingTime: string;
}

export interface Restaurant extends IRestaurant {
  id: number;
}
