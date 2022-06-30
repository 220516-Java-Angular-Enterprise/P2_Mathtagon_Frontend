import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  private gameEndpoint = "http://Mathtagon2-env.eba-uvn3ra9e.us-east-1.elasticbeanstalk.com:8080/mathtagon/games";

  getTop5(): Promise<[string, number][]> {
    return firstValueFrom(this.http.get<[string, number][]>(this.gameEndpoint));
  }


  
}
