// Whole app types.
export interface Home {
  id: string;
  title: string;
  available: boolean;
  description: string;
  neighborhood: string;
  address: string;
  notes: string;
  images_url: StoredImageObject[];
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
export interface User {
  id: string,
  name: string,
  email: string,
}

export interface AppState {
  Users: User[];
  Homes: Home[];
  currentUser: User | null;
  auth: {
    isLoggedIn: boolean;
    isAdmin: boolean;
  };
  errorClientDisplay: string | null;
  countForLearning: number;
}

// const storeInitialState :AppState = {
//   Users: [],
//   Homes: [],
//   CurrentUser: null,
//   auth: {
//     isLogged: false,
//     isAdmin: false,
//   },
//   errorClientDisplay: null,
// };
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
  images_url: StoredImageObject[];
}

export interface usersInitialStateInterface {
  users: [],
  isDataAvailable: boolean,
  isLoading: boolean,
  error?: null | string | undefined,
}

export interface userData {
  id: string,
  username: string,
  email: string,
  phone_number: string,
}

export interface FetchUsersPayload {
  users: userData[];
}

export type StoredImageObject = {
  asset_id: string;
  public_id: string;
  version: number;
  version_id: string;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: string;
  tags: string[];
  bytes: number;
  type: string;
  etag: string;
  placeholder: boolean;
  url: string;
  secure_url: string;
  folder: string;
  original_filename: string;
  api_key: string;
};
