import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Filmes em Alta', url: 'filmes-em-alta', icon: 'podium' },
    { title: 'Pesquise por filmes', url: 'pesquise-por-filmes', icon: 'search' },
    { title: 'Recomendações', url: 'recomendacoes', icon: 'sparkles' },
    { title: 'Favoritos', url: 'favoritos', icon: 'heart' },
    { title: 'Créditos', url: 'creditos', icon: 'ribbon' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}