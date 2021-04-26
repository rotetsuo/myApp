import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecomendacoesPageRoutingModule } from './recomendacoes-routing.module';

import { RecomendacoesPage } from './recomendacoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecomendacoesPageRoutingModule
  ],
  declarations: [RecomendacoesPage]
})
export class RecomendacoesPageModule {}
