import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';

export const selectUserState = createFeatureSelector<UserState>('user');

export const selectAllUsers = createSelector(
  selectUserState,
  (state: UserState) => state.users
);

export const selectUserDetails = createSelector(
  selectUserState,
  (state: UserState) => state.selectedUser
);

export const selectIsLoading = createSelector(
  selectUserState,
  (state: UserState) => state.isLoading
);
