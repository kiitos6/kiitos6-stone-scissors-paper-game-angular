import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Choices as ChoicesEnum } from 'src/app/shared/models/choice-enum';
import { GameDialogComponent } from '../game-dialog/game-dialog.component';
import { SspService } from '../service/ssp.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  name!: string;
  choices = ChoicesEnum;


  constructor(private ssp: SspService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  userChoice(choice: ChoicesEnum) {
    console.log(choice);
    this.ssp.getComputerChoice();//send answer to subject so dialog can read it
    this.dialog.open(GameDialogComponent, {
      height: '50vh',
      width: '100vh',
      data: {
        userName: this.name,
        userChoice: choice
      }
    })
    
  }
}
