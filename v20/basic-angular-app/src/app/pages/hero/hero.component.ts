import { UpperCasePipe } from '@angular/common';
import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  templateUrl: 'hero.component.html'
})
export class HeroComponent{
  private name:WritableSignal<string>  = signal("Iron Man");
  private  age:WritableSignal<number>  = signal(45);

  public heroDescription:Signal<string> = computed(() => {
      return `${this.name()} - ${this.age()}`;
  });

  public capitalizedName:Signal<string> = computed(() => {
      return this.name().toUpperCase();
  });

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
