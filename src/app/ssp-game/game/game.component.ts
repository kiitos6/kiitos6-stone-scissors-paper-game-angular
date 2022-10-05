import { Component, OnInit } from '@angular/core';
import { Choices as ChoicesEnum } from 'src/app/shared/models/choice-enum';
import { SspService } from '../service/ssp.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  name!: string;
  choices = ChoicesEnum;

  constructor(private ssp: SspService) { }

  ngOnInit(): void {
  }

  userChoice(choice: ChoicesEnum) {
    console.log(choice);
    
  }

}
