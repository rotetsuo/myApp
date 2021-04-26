import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PesquisePorFilmesPageRoutingModule } from './pesquise-por-filmes-routing.module';

import { PesquisePorFilmesPage } from './pesquise-por-filmes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PesquisePorFilmesPageRoutingModule
  ],
  declarations: [PesquisePorFilmesPage]
})
export class PesquisePorFilmesPageModule {}
