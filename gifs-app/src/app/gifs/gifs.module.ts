import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http'

import { GifItemComponent } from './components/gif-item/gif-item.component';
import { GifListComponent } from './components/gif-list/gif-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    GifListComponent,
    GifItemComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  exports : [
    HomePageComponent
  ]
})
export class GifsModule { }
