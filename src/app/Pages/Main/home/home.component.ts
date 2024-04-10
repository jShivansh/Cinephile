import { Component, OnInit } from '@angular/core';
import { MovieSearchService } from 'src/app/Core/Services/movie-search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchResults: any[] = [];
  currentPage: number = 1;
  display: any[] = [];
  displayPage: boolean = false;

  constructor(private movieService: MovieSearchService) { }

  ngOnInit(): void {
    // this.searchMovies();
    console.log('Home onInit');
    this.movieService.searchedMovie$.subscribe((data) => {
      this.searchResults = data;
      console.log(this.searchResults);
      if(data.length > 0){this.displayPage = true;}
    });
    this.currentPage = this.movieService.currentPage;
    //Year wise trial
    // this.movieService.movieSearchByYear('2023').subscribe(data => {
    //   console.log('Movies by year:', data);
    // });
  }

  searchMovies(): void {
    console.log('Home searchmovie service');
    this.movieService.setCurrentPage(this.currentPage);
  }
  onPageChange(event: any): void {
    this.currentPage = event.pageIndex + 1;
    this.searchMovies();
  }

  get searched(): boolean {
    return this.movieService.searched;
  }

  get totalLength(): number {
    return this.movieService.totalResults;
  }

}
