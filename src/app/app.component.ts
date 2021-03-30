import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Filmes em Alta', url: '/folder/Inbox', icon: 'podium' },
    { title: 'Pesquise por filmes', url: '/folder/Outbox', icon: 'search' },
    { title: 'Recomendações', url: '/folder/Favorites', icon: 'sparkles' },
    { title: 'Favoritos', url: '/folder/Archived', icon: 'heart' },
    { title: 'Créditos', url: '/folder/Trash', icon: 'ribbon' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
