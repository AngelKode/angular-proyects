import { Component, OnInit } from '@angular/core';
import { GifService } from '../../services/gif.service';
import {GifData, SearchGifResponse} from '../../interfaces/gif.interface'
@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit {

  constructor(
    private gifService : GifService
  ) { }

  ngOnInit(): void {
  }

  get gifs() : GifData[]{
    return this.gifService.gifList;
  }

  get isFetching() : boolean{
    return this.gifService.isLoading;
  }

}
