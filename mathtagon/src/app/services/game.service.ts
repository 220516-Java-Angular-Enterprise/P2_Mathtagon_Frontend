import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  private gameEndpoint = "http://localhost:8080/mathtagon/games";

  getTop5(): Promise<[string, number][]> {
    return firstValueFrom(this.http.get<[string, number][]>(this.gameEndpoint));
  }
}
