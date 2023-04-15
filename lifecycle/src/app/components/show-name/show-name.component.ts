import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-show-name',
  templateUrl: './show-name.component.html',
  styles: [
  ]
})
export class ShowNameComponent implements OnInit, OnChanges {

  @Input() nombre !: string;

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

  }

  ngOnInit(): void {
  }

}
