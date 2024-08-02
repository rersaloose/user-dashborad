import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { Res, User } from '../model/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersCache$: Observable<any> | undefined;
  private readonly usersUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  getUsers(page: number): Observable<any> {

      console.log(this.usersCache$)
      this.usersCache$ = this.http.get<{data: any}>(`${this.usersUrl}?page=${page}`)
        .pipe(
          map(response => response.data),
          shareReplay(1),
          catchError(this.handleError<any>('getUsers',[]))
        );

    return this.usersCache$;
  }

  getUser(id: number): Observable<any> {
    return this.http.get<any>(`${this.usersUrl}/${id}`)
      .pipe(
        map(response => response.data),
        catchError(this.handleError<any>('getUser',{}))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
