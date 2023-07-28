import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gifs-item',
  templateUrl: './gif-item.component.html'
})
export class GifItemComponent implements OnInit {

  @Input('title') public gifTitle !: string;
  @Input('imgSource') public gifSource !: string;

  constructor() { }

  ngOnInit(): void {
  }

}
