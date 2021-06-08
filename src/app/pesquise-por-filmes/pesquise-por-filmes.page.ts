import { MovieService } from '../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pesquise-por-filmes',
  templateUrl: './pesquise-por-filmes.page.html',
  styleUrls: ['./pesquise-por-filmes.page.scss'],
})
export class PesquisePorFilmesPage implements OnInit {
  results: Observable<any>;
  search_terms: string = '';

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }
 
  searchChanged() {
    // Call our service function which returns an Observable
    this.results = this.movieService.searchData(this.search_terms);
  }
}
