import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieSearchService {

  apiUrl = 'http://www.omdbapi.com/'; //Api is taken from here
  apiKey = 'd8a20f76'; //This is a private key provoided by the site
  searched: boolean = false;
  totalResults: number = 0;
  currentPage: number = 1;
  currentKeyword: string = '';

  searchedMovieSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  searchedMovie$: Observable<any[]> = this.searchedMovieSubject.asObservable();

  movieDetailSubject: BehaviorSubject<any> = new BehaviorSubject<any>({});
  movieDetail$: Observable<any> = this.movieDetailSubject.asObservable();

  constructor(private http: HttpClient) { }

  searchMovie(keyword: string): void{
    this.currentKeyword = keyword;
    let params = new HttpParams() //Created instance of HttpPrams
                     .set('apikey', this.apiKey) // Added apikey with value of this.apiKey to the url
                     .set('s', keyword) // Added s with value of keyword to the url
                     .set('page', this.currentPage.toString());
    //This code will create a url: https://http://www.omdbapi.com/search?apikey=d8a20f76&s=keyword

    //Making GET request for movie search using keyword
    // console.log(this.http.get(this.apiUrl, {params: params}));
    this.http.get<any>(this.apiUrl, {params: params}).subscribe((data) => {
      if (data.Response === "True") {
        // If there are search results, emit them
        this.searchedMovieSubject.next(data.Search || []);
        this.searched = true;
        this.totalResults = parseInt(data.totalResults);
      } else {
        // If no results are found, emit an empty array
        this.searchedMovieSubject.next([]);
      }
      // this.searchedMovieSubject.next(data.Search || []);
      
    })
  }

  movieDetails(imdb: string) {
    let params = new HttpParams()
                      .set('apikey', this.apiKey)
                      .set('i', imdb);

    this.http.get<any>(this.apiUrl, {params: params}).subscribe((data) => {
      console.log(data);
      this.movieDetailSubject.next(data);
    })
  }

  setSearched(value: boolean): void {
    this.searched = value;
  }
  
  setCurrentPage(page: number): void {
    this.currentPage = page;
    console.log('Current Keyword:'+ this.currentPage);
    this.searchMovie(this.currentKeyword);
  }

  movieSearchByYear(year: string): Observable<any> {
    let params = new HttpParams()
                      .set('apikey', this.apiKey)
                      .set('y', year);

    return this.http.get<any>(this.apiUrl, {params: params});
  }

}
