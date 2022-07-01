import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { Game } from '../models/game';
import { MathQuery } from '../models/mathQuery';
import { ProblemGenerator } from '../models/problem-generator';

@Injectable({
  providedIn: 'root'
})
export class ProblemsService {

  constructor(private http: HttpClient) { }

  private _newProbEndpoint = "http://Mathtagon2-env.eba-uvn3ra9e.us-east-1.elasticbeanstalk.com:8080/mathtagon/problems";
  private _mathJSEndpoint = "http://api.mathjs.org/v4/"

  private _problem = new BehaviorSubject<string>("");
  private _answer = new BehaviorSubject<string>("");

  problem$ = this._problem.asObservable();
  answer$ = this._answer.asObservable();
 
  
  displayNewProblem(newprob: ProblemGenerator): void{
    firstValueFrom(this.http.post<string>(
      this._newProbEndpoint,
      newprob))
        .then(p => {
          this._problem.next(p);
          this.calculate({expr: p});
        });
  }

  calculate(probs: MathQuery): void {
    firstValueFrom(this.http.post<{result:string, error:null}>(
      this._mathJSEndpoint,
      probs
    )).then(a => this._answer.next(a.result));
  }
}
