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

  public movie = {
    title: '',
    image_path: '',
    id: 0
  };
  
  searchChanged() {
    // Call our service function which returns an Observable
    this.results = this.movieService.searchData(this.search_terms);
  }

  onClick(name: string, poster: string, id: number) { 
    this.movie.title = name
    this.movie.image_path = poster
    this.movie.id = id
    this.movieService.setMovie(this.movie);
  }
  
  heartFill(id: number): string {
    if (this.movieService.movieHasSaved(id) === true) {
      return "heart-sharp"
    } else 
      return "heart-outline"
  }
}
