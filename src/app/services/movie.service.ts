import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
 
export enum ModeEnum {
  movie_search = '/search/movie',
  popular_movies = '/movie/popular',
}

type Movie = {
  title: string,
  image_path: string,
  id: number
}
 
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url = 'https://api.themoviedb.org/3/';
  api_key = '8a4f4006c9ebafc289bdf86dcdc5cc66';

  constructor(private http: HttpClient, private storage: Storage) {
    this.loadFromStorage();
   }

  private movies: Movie[] = [];

  private async loadFromStorage() {
    const storedMovies = await this.storage.get('movies');
    if (storedMovies) {
      // uso corretor do spreader
      this.movies.push(...storedMovies);
    }
  }
 
  searchData(search_query: string): Observable<any> {
    return this.http.get(`${this.url}search/movie?api_key=${this.api_key}&query=${encodeURI(search_query)}&language=pt-BR`).pipe(
      map(results => results['results'])
    );
  }

  topMovies(): Observable<any> {
    return this.http.get(`${this.url}trending/movies/week?api_key=${this.api_key}&language=pt-BR`).pipe(
      map(results => results['results'])
    );
  } 

  recMovies(): Observable<any> {
    return this.http.get(`${this.url}movie/top_rated?api_key=${this.api_key}`).pipe(
      map(results => results['results'])
    );
  } 

  getDetails(id) {
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.api_key}`);
  }

  public setMovie(movie: Movie) {
    if  (this.movies.find((m) => m.id === movie.id)) {} 
    else {
      this.movies.push({ ...movie});
      this.storage.set('movies', this.movies);
    }
   
  }

  public allMovies(): Readonly<Movie>[] { 
    return this.movies; 
  }
  
  public movieHasSaved(id: number): Boolean { 
    if (this.movies.find((m) => m.id === id)){
      return true
    }
      return false
  } 

}