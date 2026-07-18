import { Component, input } from '@angular/core';
import { User } from '../../data/user.model';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.scss',
})
export class UserCard {
users = input.required<User[]>();}
