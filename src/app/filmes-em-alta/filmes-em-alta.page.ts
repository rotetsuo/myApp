import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-filmes-em-alta',
  templateUrl: './filmes-em-alta.page.html',
  styleUrls: ['./filmes-em-alta.page.scss'],
})
export class FilmesEmAltaPage implements OnInit {
  public page_name: string;

  constructor(private activatedRoute: ActivatedRoute, private  movieService: MovieService) { }

  ngOnInit() {
    this.page_name = "Filmes em Alta";
  }

  public movie = {
    title: '',
    image_path: ''
  };

  onClick() {
    this.movieService.addMovie(this.movie);
  }

}
