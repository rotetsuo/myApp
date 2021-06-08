import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recomendacoes',
  templateUrl: './recomendacoes.page.html',
  styleUrls: ['./recomendacoes.page.scss'],
})
export class RecomendacoesPage implements OnInit {
  results: Observable<any>;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    this.results = this.movieService.recMovies();
  }

  public movie = {
    title: '',
    image_path: '',
    id: 0
  };

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
