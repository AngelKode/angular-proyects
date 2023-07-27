import { Injectable } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import {v4 as UUID} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public mainCharacters : Character[] = [];

  addCharacter(character : Character) : void{
    this.mainCharacters.push({
      ...character,
      id : UUID()
    })
    this.sortMyList();
  }

  deleteCharacterById(idToDelete : string) : void{
    this.mainCharacters = this.mainCharacters.filter(({id}) => id !== idToDelete);
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

  constructor() { }
}
