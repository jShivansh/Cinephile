import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MovieSearchService } from 'src/app/Core/Services/movie-search.service';
import { MovieDetialComponent } from 'src/app/Shared/Widgets/movie-detial/movie-detial.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: any;

  constructor(private dialog: MatDialog,
              private movieService: MovieSearchService) { }

  ngOnInit(): void {
  }

  openDetails(imdb: string){
    this.dialog.open(MovieDetialComponent);
    this.movieService.movieDetails(imdb);
  }

}
