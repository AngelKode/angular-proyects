import { Component, OnInit } from '@angular/core';
import { Character } from '../../interfaces/dbz.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {

  public mainCharacters : Character[] = [
    {
      name : 'Krillin',
      power : 200
    },
    {
      name : 'Goku',
      power : 15000
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
