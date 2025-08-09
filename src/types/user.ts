export interface RandomUserName {
  title: string;
  first: string;
  last: string;
}

export interface RandomUserStreet {
  number: number;
  name: string;
}

export interface RandomUserLocation {
  street?: RandomUserStreet;
  city?: string;
  state?: string;
  country?: string;
  postcode?: string | number;
}

export interface RandomUserDob {
  date?: string;
  age?: number;
}

export interface RandomUserRegistered {
  date?: string;
  age?: number;
}

export interface RandomUserLogin {
  uuid?: string;
  username?: string;
  salt?: string;
  md5?: string;
  sha1?: string;
  sha256?: string;
}

export interface RandomUserId {
  name?: string;
  value?: string | null;
}

export interface RandomUserPicture {
  large?: string;
  medium?: string;
  thumbnail?: string;
}

export interface RandomUser {
  gender?: string;
  name?: RandomUserName;
  location?: RandomUserLocation;
  email?: string;
  login?: RandomUserLogin;
  dob?: RandomUserDob;
  registered?: RandomUserRegistered;
  phone?: string;
  cell?: string;
  id?: RandomUserId;
  picture?: RandomUserPicture;
  nat?: string;
  // any extra fields:
  [key: string]: any;
}
