import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html'
})
export class LazyImageComponent implements OnInit {

  @Input('imageUrl') public imageUrl !: string;
  @Input('imageAlt') public imageAlt : string = "";

  public isLoading : boolean = true;

  constructor() { }

  ngOnInit(): void {
    if(!this.imageUrl) throw new Error('Url not received');
  }

  onLoad(){
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

}
