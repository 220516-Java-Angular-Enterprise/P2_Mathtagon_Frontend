import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { ProblemGenerator } from 'src/app/models/problem-generator';
import { ProblemsService } from 'src/app/services/problems.service';
import { HttpClient } from '@angular/common/http';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {
  private _generator: ProblemGenerator = {
    maxOperations: 2,
    problems: 1
  }

  constructor(private _problemsService: ProblemsService, private _gameService: GameService,private _http: HttpClient) {
    this._problemsService.problem$.subscribe(p => this.toSolve = p);
    this._problemsService.answer$.subscribe(a => this.answers=a);
  }

  started: boolean = false;

  score: number = 0;
  lives: number = 3;

  toSolve: string = "";
  answers: string = "";

  ngOnInit() {
  }

  //start the game and keep track of score
  start():void {
    this.started = true;
    this.cycle();
  }

  end(): void {

  }

  cycle(): void {
    this._problemsService.displayNewProblem(this._generator);
    //console.log('Problem:',this.toSolve,'Answer:',this.answers);
  }


  //evaluating user input
  checkAnswer(): void {
    let input:string = (<HTMLInputElement>document.getElementById("answer")).value
    let correct: boolean = input == this.answers[0];
    console.log('entered',input, 'answer', this.answers);

    if(correct) this.score++;
    else this.lives--;

    if(this.lives > 0) this.cycle();
    else this.end();
  }

}

