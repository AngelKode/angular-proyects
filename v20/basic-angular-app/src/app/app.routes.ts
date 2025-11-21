import { Routes } from '@angular/router';
import { CounterPage } from './pages/counter/counter.component';
import { HeroComponent } from './pages/hero/hero.component';

export const routes: Routes = [
  {
    path : '',
    component : CounterPage
  },
  {
    path : 'hero',
    component : HeroComponent,
    title : 'Hero Page'
  }
];
