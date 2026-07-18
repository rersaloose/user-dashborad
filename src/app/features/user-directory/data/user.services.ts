import { Injectable, computed, signal } from '@angular/core';
import { User, UserDTO, UserMapper } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private rawUsersMock: UserDTO[] = [
    {
      user_id: '1',
      first_name: 'Eslam',
      last_name: 'Ahmed',
      email_address: 'eslam@example.com',
   
      user_addresses: [
        { street_address: '90th St', city_name: 'Cairo', country_code: 'Egypt' },
        { street_address: 'El-Bahr St', city_name: 'Tanta', country_code: 'Egypt' }
      ],
      user_phones: [
        { phone_type: 'Mobile', phone_num: '01012345678' },
        { phone_type: 'Work', phone_num: '022345678' }
      ]
    },
    {
      user_id: '2',
      first_name: 'Omar',
      last_name: 'Kamal',
      email_address: 'omar@example.com',
  
      user_addresses: null, 
      user_phones: [
        { phone_type: 'Mobile', phone_num: '01298765432' }
      ]
    },
    {
      user_id: '3',
      first_name: 'Sarah',
      last_name: 'Ali',
      email_address: 'sarah@example.com',
    
      user_addresses: [
        { street_address: 'Hamra St', city_name: 'Beirut', country_code: 'Lebanon' }
      ],
      user_phones: null 
    }
  ];

  private usersSignal = signal<User[]>(this.rawUsersMock.map(dto => UserMapper.fromDTO(dto)));
  
  searchQuery = signal<string>('');

  filteredUsers = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const users = this.usersSignal();

    if (!query) return users;

    return users.filter(user => 
      user.firstName.toLowerCase().includes(query) ||
      user.lastName.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query)
    );
  });

  updateSearchQuery(query: string) {
    this.searchQuery.set(query);
  }
}