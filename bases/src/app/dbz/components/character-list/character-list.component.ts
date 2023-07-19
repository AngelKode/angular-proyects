import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../interfaces/dbz.interface';

@Component({
  selector: 'app-dbz-character-list',
  templateUrl: './character-list.component.html'
})
export class CharacterListComponent implements OnInit {

  @Input() characters : Character[];

  constructor() {
    this.characters = [];
  }

  ngOnInit(): void {
  }

}
