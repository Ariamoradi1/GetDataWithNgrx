import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { myUsers } from './models/myUsers.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUserss(): Observable<myUsers[]> {
    return this.http.get<{ [key: string]: myUsers }>('https://angular-ngrx-45a84-default-rtdb.firebaseio.com/users.json')
      .pipe(
        map(data => {
          const users: myUsers[] = [];
          for (let key in data) {
            if (data.hasOwnProperty(key)) {
              users.push(data[key]);
            }
          }
          return users;
        })
      );
  }
}
