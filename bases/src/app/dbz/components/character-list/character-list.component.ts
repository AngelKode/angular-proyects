import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/dbz.interface';

@Component({
  selector: 'app-dbz-character-list',
  templateUrl: './character-list.component.html'
})
export class CharacterListComponent implements OnInit {

  @Input() characters : Character[];
  @Output() public onDeleteCharacter : EventEmitter<string> = new EventEmitter();

  constructor() {
    this.characters = [];
  }

  ngOnInit(): void {
  }

  deleteCharacter(idToDelete : string) : void{
      this.onDeleteCharacter.emit(idToDelete);
  }

}
