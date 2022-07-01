import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, first, firstValueFrom } from 'rxjs';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  private _activeGame = new BehaviorSubject<Game>({
    user_id: '',
    gametype: -1,
    score: 0
  });
  activeGame$ = this._activeGame.asObservable();

  private gameEndpoint = "http://Mathtagon2-env.eba-uvn3ra9e.us-east-1.elasticbeanstalk.com:8080/mathtagon/games";

  getTop5(): Promise<[string, number][]> {
    return firstValueFrom(this.http.get<[string, number][]>(this.gameEndpoint));
  }

  saveGame(saveData: Game): void {
    firstValueFrom(this.http.post<Game>(this.gameEndpoint, saveData))
      .then(g => this._activeGame.next(g));
  }

  newGame(game: Game): void {
    this._activeGame.next(game);
  }
  
}
