import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { ScoresComponent } from './scores/scores.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    GameComponent,
    ScoresComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ]
})
export class SspGameModule { }
