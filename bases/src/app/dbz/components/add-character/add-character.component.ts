import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/dbz.interface';

@Component({
  selector: 'app-dbz-addCharacter',
  templateUrl: './add-character.component.html'
})
export class AddCharacterComponent implements OnInit {

  @Output('onNewCharacterEvent') public onNewCharacter : EventEmitter<Character> = new EventEmitter();

  public myCharacter : Character = {
    name : '',
    power : 0
  }

  constructor(
  ) { }

  ngOnInit(): void {

  }

  addNewCharacter() : void{
    this.onNewCharacter.emit({...this.myCharacter});
    this.cleanCharacter();
  }

  cleanCharacter() : void{
    this.myCharacter.name = "";
    this.myCharacter.power = 0;
  }
}
