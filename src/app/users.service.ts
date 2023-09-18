import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClient) { }

  getUsers(){
    this.http.get('https://angular-ngrx-45a84-default-rtdb.firebaseio.com/users.json')
  }
}
