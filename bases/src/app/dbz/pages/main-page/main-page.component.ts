import { Component, OnInit } from '@angular/core';
import { Character } from '../../interfaces/dbz.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {

  public mainCharacters : Character[] = [
    {
      name : 'Goku',
      power : 15000
    },
    {
      name : 'Vegetta',
      power : 13500
    },
    {
      name : 'Gohan',
      power : 13499
    },
    {
      name : 'Krillin',
      power : 200
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onNewCharacter(character : Character) : void{
    this.mainCharacters.push(character)
    this.sortMyList();
  }

  sortMyList() : void{
    this.mainCharacters.sort((a : Character,b : Character) => {

      if(!(a.power && b.power)){
        return -1;
      }

      if(a.power > b.power){
        return -1;
      }

      return 1;
    });
  }

  onDeleteCharacter(indexToDelete : number) : void{
    this.mainCharacters.splice(indexToDelete, 1);
  }

}
