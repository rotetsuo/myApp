import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 
export enum ModeEnum {
  movie_search = '/search/movie',
  popular_movies = '/movie/popular',
}
 
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url = 'https://api.themoviedb.org/3/';
  api_key = '8a4f4006c9ebafc289bdf86dcdc5cc66';

  constructor(private http: HttpClient) { }
 
  searchData(search_query: string): Observable<any> {
    return this.http.get(`${this.url}search/movie?api_key=${this.api_key}&query=${encodeURI(search_query)}&language=pt-BR`).pipe(
      map(results => results['results'])
    );
  }

  topMovies(): Observable<any> {
    return this.http.get(`${this.url}trending/all/week?api_key=${this.api_key}&language=pt-BR`).pipe(
      map(results => results['results'])
    );
  } 

  getDetails(id) {
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.api_key}`);
  }
}