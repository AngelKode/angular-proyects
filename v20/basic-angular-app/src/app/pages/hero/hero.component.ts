import { UpperCasePipe } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  templateUrl: 'hero.component.html',
  imports : [UpperCasePipe]
})
export class HeroComponent{
  public name:WritableSignal<string>  = signal("Iron Man");
  public  age:WritableSignal<number>  = signal(45);

  getHeroDescription():string{
    return `${this.name()} - ${this.age()}`;
  }

  changeHero():void{
    this.name.set("SpiderMan");
    this.age.set(22);
  }

  resetForm():void{
    this.name.set("Iron Man");
    this.age.set(45);
  }

  changeAge():void{
    this.age.set(60);
  }
}
