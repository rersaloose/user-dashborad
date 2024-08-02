import { createReducer, on } from '@ngrx/store';
import { loadUsers, loadUsersSuccess, loadUsersFailure, loadUser, loadUserSuccess, loadUserFailure } from './user.actions';

export interface UserState {
  users: any[];
  selectedUser: any;
  error: any;
  isLoading: boolean;
}

export const initialState: UserState = {
  users: [],
  selectedUser: null,
  error: null,
  isLoading: false
};

export const userReducer = createReducer(
  initialState,
  on(loadUsers, (state) => ({ ...state, isLoading: true })),
  on(loadUsersSuccess, (state, { users }) => ({ ...state, users, isLoading: false })),
  on(loadUsersFailure, (state, { error }) => ({ ...state, error, isLoading: false })),
  on(loadUser, (state) => ({ ...state, isLoading: true })),
  on(loadUserSuccess, (state, { user }) => ({ ...state, selectedUser: user, isLoading: false })),
  on(loadUserFailure, (state, { error }) => ({ ...state, error, isLoading: false }))
);
