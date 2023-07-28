import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifService } from 'src/app/gifs/services/gif.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  constructor(
    private gifService : GifService
  ) {}

  ngOnInit(): void {
  }

  get getPrevSearches(){
    return this.gifService.tagsHistory;
  }

  researchTag(tag : string){
    this.gifService.searchTag(tag);
  }
}
