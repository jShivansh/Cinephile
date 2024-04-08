import { Component, OnInit } from '@angular/core';
import { MovieSearchService } from 'src/app/Core/Services/movie-search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  keyword: string = '';

  constructor(private movieService: MovieSearchService) { }

  ngOnInit(): void {
  }

  searchMovie(){
    console.log('Search was called with:'+ this.keyword);
    this.movieService.searchMovie(this.keyword);
    this.movieService.setSearched(true);
    this.movieService.setCurrentPage(1);
  }

}
