import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { GifService } from '../../services/gif.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent implements OnInit {

  @ViewChild('searchInput') public mySearchInputHTML !: ElementRef<HTMLInputElement>;
  @Output('onSearch') public onSearch : EventEmitter<string> = new EventEmitter();

  constructor(
    private gifService : GifService
  ) { }

  ngOnInit(): void {

  }

  searchTag() : void{
    let tagToSearch : string = this.mySearchInputHTML.nativeElement.value;

    this.gifService.searchTag(tagToSearch);

    this.clearSearchInput();
  }

  clearSearchInput() : void{
    this.mySearchInputHTML.nativeElement.value = "";
  }

}
