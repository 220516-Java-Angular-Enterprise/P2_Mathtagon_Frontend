import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Game } from '../models/game';
import { ProblemGenerator } from '../models/problem-generator';

@Injectable({
  providedIn: 'root'
})
export class ProblemsService {

  constructor(private http: HttpClient) { }

  private newprobEndpoint = "http://Mathtagon2-env.eba-uvn3ra9e.us-east-1.elasticbeanstalk.com:8080/mathtagon/problems";
 
  
  displayNewProblem(newprob: ProblemGenerator): Promise<string[]>{
    return firstValueFrom(this.http.post<string[]>(
      this.newprobEndpoint,
      newprob));
  }
}
