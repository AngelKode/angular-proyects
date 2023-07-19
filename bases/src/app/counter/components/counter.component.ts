import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {

  constructor() { }

  public counter:number = 0;

  addCounter(factor:number = 1) : void{
    this.counter = this.counter + factor;
  }

  resetCounter() : void{
    this.counter = 0;
  }
}
