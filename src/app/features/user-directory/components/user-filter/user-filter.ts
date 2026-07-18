import { Component, inject } from '@angular/core';
import { UserService } from '../../data/user.services';

@Component({
  selector: 'app-user-filter',
  imports: [],
  templateUrl: './user-filter.html',
  styleUrl: './user-filter.scss',
})
export class UserFilter {
private userService = inject(UserService);

  onSearchChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.userService.updateSearchQuery(value);
  }
}
