import { Component, OnInit } from '@angular/core';
import { MovieSearchService } from 'src/app/Core/Services/movie-search.service';

@Component({
  selector: 'app-movie-detial',
  templateUrl: './movie-detial.component.html',
  styleUrls: ['./movie-detial.component.css']
})
export class MovieDetialComponent implements OnInit {
  
  movieDetails: any;

  constructor(private movieService: MovieSearchService) { }

  ngOnInit(): void {
    this.movieService.movieDetail$.subscribe((data) => {
      this.movieDetails = data;
    })
  }

}
