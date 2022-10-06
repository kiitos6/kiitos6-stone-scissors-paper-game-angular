import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Choices } from 'src/app/shared/models/choice-enum';
import { GameDialogData } from 'src/app/shared/models/GameDialogData';
import { SspService } from '../service/ssp.service';
import { Choices as ChoicesEnum } from 'src/app/shared/models/choice-enum';

@Component({
  selector: 'app-game-dialog',
  templateUrl: './game-dialog.component.html',
  styleUrls: ['./game-dialog.component.scss']
})
export class GameDialogComponent implements OnInit {

  computerChoice!: Choices;
  choices = ChoicesEnum;
  private computerChoiceSubscription: Subscription | undefined;

  constructor(
    public dialogRef: MatDialogRef<GameDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GameDialogData,
    private sspService: SspService
    ) { }

  ngOnInit(): void {
    this.computerChoiceSubscription = this.sspService.currentComputerChoice.subscribe(
      computerChoice => {
        this.computerChoice = computerChoice;
        console.log('computer choice from dialog ' + computerChoice);
      }
    )
  }

  ngOnDestroy(): void {
    this.computerChoiceSubscription?.unsubscribe();
  }

}
