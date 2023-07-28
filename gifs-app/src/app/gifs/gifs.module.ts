import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { GifListComponent } from './components/gif-list/gif-list.component';
import { GifItemComponent } from './components/gif-item/gif-item.component';

@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    GifListComponent,
    GifItemComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports : [
    HomePageComponent
  ]
})
export class GifsModule { }
