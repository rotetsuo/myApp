import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmesEmAltaPage } from './filmes-em-alta.page';

const routes: Routes = [
  {
    path: '',
    component: FilmesEmAltaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmesEmAltaPageRoutingModule {}
