import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { ProblemGenerator } from 'src/app/models/problem-generator';
import { ProblemsService } from 'src/app/services/problems.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {

  problem1: any;

  constructor(private problemsService: ProblemsService, private http: HttpClient) { }

  ngOnInit() {
    this.http.post<any>('http://Mathtagon2-env.eba-uvn3ra9e.us-east-1.elasticbeanstalk.com:8080/mathtagon/problems',
     { maxOperations: '2', problems: '1' }).subscribe(data => {
        this.problem1 = data;
    })
}

}

