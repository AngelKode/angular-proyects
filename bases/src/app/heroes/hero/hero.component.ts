import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit {

  private name:string;
  private age:number;

  constructor() {
    this.age = 20;
    this.name = "Clark Kent"
  }

  ngOnInit(): void {
  }

  get getName() : string{
    return this.name;
  }

  get getAge() : number{
    return this.age;
  }

  changeName() : void{
    this.name = "Steve Rogers";
  }

  changeAge() : void{
    this.age = 200;
  }

  resetForm() : void{
    this.name = "Clark Kent";
    this.age = 20;
  }

}
