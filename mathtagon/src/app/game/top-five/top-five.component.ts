import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'top-five',
  templateUrl: './top-five.component.html',
  styleUrls: ['./top-five.component.css']
})
export class TopFiveComponent implements OnInit {

  constructor(private gameService: GameService) { }

  scores: [string, number][] = [];

  ngOnInit(): void {
    this.gameService.getTop5().then(leaderBoard => {
      this.scores = leaderBoard;
    })
  }

}


