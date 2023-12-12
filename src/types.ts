export interface Home {
  id: string;
  title: string;
  available: boolean;
  description: string;
  neighborhood: string;
  address: string;
  notes: string;
  images_url: string[];
  price: number;
  area: number;
  floor: number;
  rooms: number;
  bathrooms: number;
  storage: number;
  antiquity: number;
  parking_spots: number;
  favorite_users: FavoriteUser[];
  createdAt: string;
  updatedAt: string;
}

export interface FavoriteUser {
  id: string;
  username: string;
  email: string;
  password: string;
  phone_number: number;
  is_admin: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface HomesResponse {
  message: string;
  data: Home[];
}

export type signupInput = {
  username: string;
  email: string;
  password: string;
  phone_number: string;
  passwordCheck?: string;
};

export type loginInput = {
  email: string;
  password: string;
};

export interface newHomeInput {
  title: string;
  description: string;
  neighborhood: string;
  address: string;
  notes: string;
  price: string;
  area: string;
  floor: string;
  rooms: string;
  bathrooms: string;
  storage: string;
  antiquity: string;
  parking_spots: string;
  images_url: string[];
}
