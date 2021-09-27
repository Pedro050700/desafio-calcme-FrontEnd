import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlApiUser = "http://localhost:8080/api/usuario";

  httOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  public getUser(): Observable<User> {
    return this.httpClient.get<User>(this.urlApiUser);
  }

  public postUser(users: any): Observable<User> {
    return this.httpClient.post<any>(this.urlApiUser, users, this.httOptions)
  }

}
