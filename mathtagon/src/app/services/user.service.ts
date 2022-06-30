import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  //private _rootURL = "http://localhost:8080/mathtagon";
  private _rootURL = "http://Mathtagon2-env.eba-uvn3ra9e.us-east-1.elasticbeanstalk.com:8080/mathtagon/"
  private _userEndpoint = this._rootURL+"/users";
  private _authEndpoint = this._rootURL+"/auth";

  private _user = new BehaviorSubject<User>({
    userID: '',
    username: '',
    password: '',
    email: '',
    fullname: '',
    age: 0,
    games: []
  })

  private _isAuthenticated = new BehaviorSubject<boolean>(false);

  user$ = this._user.asObservable();
  isAuthenticated$ = this._isAuthenticated.asObservable();

  constructor(private http: HttpClient) { }

  //getUserHistory(reqHeaders: HttpHeaders): Promise<User> {
  //  return firstValueFrom(this.http.get<User>(
  //    this.userEndpoint,
  //    {
  //      headers: reqHeaders,
  //    }
  //    ));
  //}

  register(user: User): Promise<string> {
    return firstValueFrom(this.http.post<string>(this._userEndpoint, user));
  }

  async login(user: User): Promise<User | void> {
    try {
      const u = await firstValueFrom(this.http.post<User>(
        this._authEndpoint,
        user
      ));
      this._user.next(u);
      this._isAuthenticated.next(true);
    } catch (err) {
      this._user.next({} as any);
      this._isAuthenticated.next(false);
    }
  }

  logOut(): void {
    this._user.next({ } as any);
    this._isAuthenticated.next(false);
  }
}
