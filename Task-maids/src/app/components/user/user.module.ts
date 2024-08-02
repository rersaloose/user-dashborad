import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import { UserListComponent } from './user-list/user-list.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserComponent } from './user.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    UserListComponent,
    UserDetailsComponent,
    UserComponent
  ],
  imports: [

    MatProgressBarModule,
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatPaginatorModule,
    FormsModule,
    MatIconModule,
    MatGridListModule,

    MatFormFieldModule,

    UserRoutingModule,
     MatToolbarModule,

    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatPaginatorModule,
    MatProgressBarModule,

    MatButtonModule

  ]
})
export class UserModule { }
