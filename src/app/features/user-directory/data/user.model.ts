export interface AddressDTO {
  street_address: string;
  city_name: string;
  country_code: string;
}

export interface PhoneDTO {
  phone_type: string;
  phone_num: string;
}

export interface UserDTO {
  user_id: string;
  first_name: string;
  last_name: string;
  email_address: string;

  user_addresses: AddressDTO[] | null; 
  user_phones: PhoneDTO[] | null;   
}

export interface Address {
  street: string;
  city: string;
  country: string;
}

export interface Phone {
  type: string;
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

export class UserMapper {
  static fromDTO(dto: UserDTO): User {
    return {
      id: dto.user_id,
      firstName: dto.first_name || 'N/A', 
      lastName: dto.last_name || 'N/A',
      email: dto.email_address || 'No Email',
      
      addresses: (dto.user_addresses || []).map(addr => ({
        street: addr.street_address,
        city: addr.city_name,
        country: addr.country_code
      })),
      
     
      phones: (dto.user_phones || []).map(phone => ({
        type: phone.phone_type,
        number: phone.phone_num
      }))
    };
  }
}