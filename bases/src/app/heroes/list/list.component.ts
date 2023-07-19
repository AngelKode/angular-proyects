import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heores-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {

  private heroNames : string[] = [
    "Spiderman",
    "Thor",
    "Ironman",
    "Wonder Woman"
  ];
  private deletedHero : string | undefined;

  constructor() { }

  get getHeroNames() : string[]{
    return this.heroNames;
  }

  get getDeletedHero() : string | undefined{
    return this.deletedHero;
  }

  removeLastHero() : void{
    this.deletedHero = this.heroNames.pop();
  }
  ngOnInit(): void {
  }

}
