export interface ListItem {
  id: number;
  description: string;
  price: number;
}

export interface BasketItem extends ListItem {
  count: number;
}
