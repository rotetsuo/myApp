import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilmesEmAltaPageRoutingModule } from './filmes-em-alta-routing.module';

import { FilmesEmAltaPage } from './filmes-em-alta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmesEmAltaPageRoutingModule
  ],
  declarations: [FilmesEmAltaPage]
})
export class FilmesEmAltaPageModule {}
