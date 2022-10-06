import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Choices } from 'src/app/shared/models/choice-enum';

@Injectable({
  providedIn: 'root'
})
export class SspService {

  private currentComputerChoiceSubject: BehaviorSubject<Choices> = new BehaviorSubject({} as Choices);
  public readonly currentComputerChoice: Observable<Choices> = this.currentComputerChoiceSubject.asObservable();

  constructor() { }

  getComputerChoice(): void {
    //call to backend
    this.setCurrentComputerChoice(Choices.paper);
  }

  setCurrentComputerChoice(choice: Choices): void {
    this.currentComputerChoiceSubject.next(choice);
  }
}
