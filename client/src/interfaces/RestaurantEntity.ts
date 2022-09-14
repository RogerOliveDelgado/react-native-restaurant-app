// Generated by https://quicktype.io

export interface Restaurant {
  id:               number;
  rating:           Rating;
  n_comments:       number;
  name:             string;
  type:             string;
  tables_available: number;
  location:         string;
  menu:             Menu[];
}

export interface Menu {
  name:         string;
  price:        number;
  availableQty: number;
}

export enum Name {
  Ensalada = "Ensalada",
  Macarrones = "Macarrones",
  Pasta = "Pasta",
  Spaguettis = "Spaguettis",
}

export interface Rating {
  number: number;
  avg:    number;
  max:    number;
}