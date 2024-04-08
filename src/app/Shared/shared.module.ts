import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetialComponent } from './Widgets/movie-detial/movie-detial.component';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [
    MovieDetialComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
