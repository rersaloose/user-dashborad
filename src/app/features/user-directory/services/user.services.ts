import { Injectable, computed, signal } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private usersSignal = signal<User[]>([
    {
      id: '1',
      firstName: 'Ahmed',
      lastName: 'Ali',
      email: 'ahmed.ali@example.com',
      addresses: [
        { street: '90th Street', city: 'Cairo', country: 'Egypt' },
        { street: 'El-Bahr St', city: 'Tanta', country: 'Egypt' }
      ],
      phones: [
        { type: 'Mobile', number: '01012345678' },
        { type: 'Work', number: '022345678' }
      ]
    },
    {
      id: '2',
      firstName: 'Sarah',
      lastName: 'Hassan',
      email: 'sarah.h@example.com',
      addresses: [
        { street: 'Hamra St', city: 'Beirut', country: 'Lebanon' }
      ],
      phones: [
        { type: 'Mobile', number: '01298765432' }
      ]
    },
    {
      id: '3',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      addresses: [
        { street: '5th Avenue', city: 'New York', country: 'USA' }
      ],
      phones: [
        { type: 'Home', number: '0115551234' }
      ]
    },
    {
      id: '4',
      firstName: 'Mohamed',
      lastName: 'Saeed',
      email: 'm.saeed@example.com',
      addresses: [
        { street: 'Corniche St', city: 'Alexandria', country: 'Egypt' }
      ],
      phones: [
        { type: 'Mobile', number: '01511122233' },
        { type: 'Work', number: '033998877' }
      ]
    }
  ]);

 
  searchQuery = signal<string>('');

  
  filteredUsers = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const users = this.usersSignal();

    if (!query) {
      return users;
    }

    return users.filter(user => 
      user.firstName.toLowerCase().includes(query) ||
      user.lastName.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query) ||
      // البحث داخل العناوين
      user.addresses.some(addr => 
        addr.city.toLowerCase().includes(query) || 
        addr.country.toLowerCase().includes(query)
      ) ||
      // البحث داخل أرقام الهواتف
      user.phones.some(p => p.number.includes(query))
    );
  });

  // طريقة لتحديث قيمة البحث
  updateSearchQuery(query: string) {
    this.searchQuery.set(query);
  }
}