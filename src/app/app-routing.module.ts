import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'filmes-em-alta',
    loadChildren: () => import('./filmes-em-alta/filmes-em-alta.module').then( m => m.FilmesEmAltaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },  {
    path: 'pesquise-por-filmes',
    loadChildren: () => import('./pesquise-por-filmes/pesquise-por-filmes.module').then( m => m.PesquisePorFilmesPageModule)
  },
  {
    path: 'recomendacoes',
    loadChildren: () => import('./recomendacoes/recomendacoes.module').then( m => m.RecomendacoesPageModule)
  },
  {
    path: 'favoritos',
    loadChildren: () => import('./favoritos/favoritos.module').then( m => m.FavoritosPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}


