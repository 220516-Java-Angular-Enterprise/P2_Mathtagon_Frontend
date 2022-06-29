import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  private rootURL = 'http://localhost:8080/mathtagon';
  private userEndpoint = this.rootURL + '/users';
  private authEndpoint = this.rootURL + '/auth';

  //getUserHistory(reqHeaders: HttpHeaders): Promise<User> {
  //  return firstValueFrom(this.http.get<User>(
  //    this.userEndpoint,
  //    {
  //      headers: reqHeaders,
  //    }
  //    ));
  //}

  register(user: User): Promise<string> {
    return firstValueFrom(this.http.post<string>(this.userEndpoint, user));
  }

  login(user: User): Promise<User> {
    return firstValueFrom(this.http.post<User>(this.authEndpoint, user));
  }
}
