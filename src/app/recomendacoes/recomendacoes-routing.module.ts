import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecomendacoesPage } from './recomendacoes.page';

const routes: Routes = [
  {
    path: '',
    component: RecomendacoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecomendacoesPageRoutingModule {}
