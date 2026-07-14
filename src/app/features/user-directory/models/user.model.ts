export interface Address {
  street: string;
  city: string;
  zipCode?: string;
  country: string;
}

export interface Phone {
  type: 'Mobile' | 'Home' | 'Work';
  number: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  addresses: Address[];
  phones: Phone[];
}