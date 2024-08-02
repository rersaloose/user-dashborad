import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/model/user-model';
import { UserService } from 'src/app/services/user.service';
import { loadUser } from 'src/app/state/user.actions';
import { selectUserDetails, selectIsLoading } from 'src/app/state/user.selectors';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'], animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class UserDetailsComponent {

  user$ = this.store.select(selectUserDetails);
  isLoading$ = this.store.select(selectIsLoading);
  constructor( private userService: UserService, private route: ActivatedRoute, private router: Router, private store: Store) {

  }
  user:any
  isLoading: boolean = true;
  userId:number=0

  ngOnInit() {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    this.store.dispatch(loadUser({ id: this.userId }));
    console.log(this.userId)
    this.userService.getUser(this.userId).subscribe(user => {
      console.log(user)
      this.user = user;
      this.isLoading = false;
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
