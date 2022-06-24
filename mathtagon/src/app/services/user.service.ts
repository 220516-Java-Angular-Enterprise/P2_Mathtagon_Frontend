import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  private userURL = 'http://localhost:8080/mathtagon/users';

  getAllUsers(): Promise<User[]> {
    return firstValueFrom(this.http.get<User[]>(this.userURL));
  }

  getUserById(id: string): Promise<User> {
    return firstValueFrom(this.http.get<User>(this.userURL + '/' + id));
  }

  signUp(user: User) {
    return firstValueFrom(this.http.post(this.userURL, user));
  }
}
