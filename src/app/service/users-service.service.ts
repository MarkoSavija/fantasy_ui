import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  loggedIn = false;

  constructor(private http: HttpClient) { }

  login() {
    return this.http.get('http://localhost:8080/api/players')
        .pipe(
          map((data: User) => {
            return data;
            this.loggedIn = true;
          }));
  }

  register() {

  }

  logout() {

  }
}
