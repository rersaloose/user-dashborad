import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Res, User } from 'src/app/model/user-model';
import { UserService } from 'src/app/services/user.service';
import { Store } from '@ngrx/store';
import { selectAllUsers, selectIsLoading } from 'src/app/state/user.selectors';
import { loadUsers } from 'src/app/state/user.actions';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class UserListComponent implements OnInit{
  users$ = this.store.select(selectAllUsers);
  isLoading$ = this.store.select(selectIsLoading);

  users: User[] | undefined;
  isLoading: boolean = true;
  totalUsers: number | undefined;
  pageSize=1
  page=1
  constructor(private userService: UserService, private store: Store, private router: Router) {}

  ngOnInit() {
    this.store.dispatch(loadUsers({ page: 1 }));
    this.fetchUsers(this.page);
  }

  fetchUsers(page: number) {
    this.isLoading = true;
    this.userService.getUsers(page).subscribe((users:any) => {
      console.log(users)
      this.users = users;
      this.totalUsers = users.length; // Update based on the actual data structure

      this.isLoading = false;
    });
  }

  selectUser(user:any) {
 if(!user.id){
return
 }else{
  this.router.navigate(['/user', user.id]);
 }

  }

  onPageChange(event: any) {
    console.log(event)

    this.page=event.pageIndex
    this.fetchUsers(this.page
      +1);
    this.store.dispatch(loadUsers({ page: event.pageIndex + 1 }));
  }
}
