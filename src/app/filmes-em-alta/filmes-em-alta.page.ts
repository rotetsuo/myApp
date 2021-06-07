import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-filmes-em-alta',
  templateUrl: './filmes-em-alta.page.html',
  styleUrls: ['./filmes-em-alta.page.scss'],
})
export class FilmesEmAltaPage implements OnInit {
  public page_name: string;
  results: Observable<any>;


  constructor(private activatedRoute: ActivatedRoute,private movieService: MovieService) { }

  ngOnInit() {
    this.results = this.movieService.topMovies();
  }

  public movie = {
    title: '',
    image_path: ''
  };

  onClick(name: String, poster: String) {
    this.movieService.addMovie(this.movie);
  }
}
