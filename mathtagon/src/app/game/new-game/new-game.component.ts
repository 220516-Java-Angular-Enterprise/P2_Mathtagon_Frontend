import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { ProblemGenerator } from 'src/app/models/problem-generator';
import { ProblemsService } from 'src/app/services/problems.service';
import { HttpClient } from '@angular/common/http';
import { GameService } from 'src/app/services/game.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

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

  toSolve!: string;
  answers!: string;


  constructor(private _problemsService: ProblemsService, private _gameService: GameService,private _router: Router) {
    this._problemsService.problem$.subscribe(p => this.toSolve = p);
    this._problemsService.answer$.subscribe(a => this.answers = a);
    
  }


  score!: number;
  lives!: number;

  started: boolean = false;
  ended: boolean = false;

  ngOnInit() {
  }

  //start the game and keep track of score
  start():void {
    this.started = true;
    this.score = 0;
    this.lives = 3;

    this.cycle();
  }

  end(): void {
    this.ended = true;
  }

  cycle(): void {
    this._problemsService.displayNewProblem(this._generator);
    //console.log('Problem:',this.toSolve,'Answer:',this.answers);
  }


  //evaluating user input
  checkAnswer(): void {
    let input:HTMLInputElement = <HTMLInputElement>document.getElementById("answer")
    let correct: boolean = input.value == this.answers[0];
    console.log('entered',input, 'answer', this.answers);

    if(correct) this.score++;
    else this.lives--;

    if(this.lives > 0) {
      this.cycle();
    }
    else {
      this.ended = true;
    }
  }

}

