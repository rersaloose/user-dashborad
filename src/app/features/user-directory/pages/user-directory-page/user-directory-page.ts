import { Component, inject } from '@angular/core';
import { UserFilter } from '../../components/user-filter/user-filter';
import { UserCard } from '../../components/user-card/user-card';
import { UserService } from '../../data/user.services';

@Component({
  selector: 'app-user-directory-page',
imports: [UserFilter, UserCard],
  templateUrl: './user-directory-page.html',
  styleUrl: './user-directory-page.scss',
})
export class UserDirectoryPage {
private userService = inject(UserService);
  filteredUsers = this.userService.filteredUsers;
}
