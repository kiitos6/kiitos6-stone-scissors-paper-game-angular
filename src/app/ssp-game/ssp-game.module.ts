import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { ScoresComponent } from './scores/scores.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../shared/material/material.module';
import { GameDialogComponent } from './game-dialog/game-dialog.component';



@NgModule({
  declarations: [
    GameComponent,
    ScoresComponent,
    GameDialogComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class SspGameModule { }
