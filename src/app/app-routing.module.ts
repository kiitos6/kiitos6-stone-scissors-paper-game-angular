import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './ssp-game/game/game.component';
import { ScoresComponent } from './ssp-game/scores/scores.component';

const routes: Routes = [
  {path: '', component: GameComponent},
  {path: 'scores', component: ScoresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
