import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesquisePorFilmesPage } from './pesquise-por-filmes.page';

const routes: Routes = [
  {
    path: '',
    component: PesquisePorFilmesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PesquisePorFilmesPageRoutingModule {}
