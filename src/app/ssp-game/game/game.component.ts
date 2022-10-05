import { Component, OnInit } from '@angular/core';
import { Choices } from 'app/shared/models/choice-enum';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  name!: string;
  choice!: Choices;

  constructor() { }

  ngOnInit(): void {
  }

  selectChoice(choice: Choices) {
    
  }

}
