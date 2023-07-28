import { Component, Input, OnInit } from '@angular/core';
import { GifData } from '../../interfaces/gif.interface';

@Component({
  selector: 'gifs-list',
  templateUrl: './gif-list.component.html'
})
export class GifListComponent implements OnInit {

  @Input('gifsToShow') public gifItems : GifData[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  get getGifItems(){
    return this.gifItems;
  }
}
