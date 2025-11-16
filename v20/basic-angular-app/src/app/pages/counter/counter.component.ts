import { Component, signal, WritableSignal } from "@angular/core";

@Component({
  templateUrl : 'counter.component.html'
})
export class CounterPage{
  public counter:WritableSignal<number> = signal(0);

  increaseCounter(rate:number = 1){
      this.counter.update((currentValue) => currentValue + rate);
  }

  decreaseCounter(rate:number = 1){
      this.counter.update((currentValue) => currentValue - rate);
  }

  resetCounter(resetValue : number = 0){
     this.counter.set(resetValue);
  }
}
