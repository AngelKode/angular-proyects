import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  DoCheck,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styles: [
  ]
})
export class PageOneComponent implements  OnInit, OnChanges, DoCheck, OnDestroy,
                                          AfterContentInit, AfterContentChecked,AfterViewInit,
                                          AfterViewChecked {



  constructor() {
    console.log('a')
  }

  ngOnInit(): void {
    console.log('b')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes+'xd')
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  save() : void{

  }
}
