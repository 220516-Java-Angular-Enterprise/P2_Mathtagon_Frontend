import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private userEndpoint = "http://localhost:8080/mathtagon/users";

  getUserHistory(): Promise<User> {
    return firstValueFrom(this.http.get<User>(this.userEndpoint));
  }
}
