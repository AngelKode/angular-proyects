import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : 'multiple',
    loadChildren : () => import('./paises/paises.module').then(module => module.PaisesModule)
  },
  {
    path : '**',
    redirectTo : 'multiple'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
