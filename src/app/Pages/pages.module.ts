import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Header-Footer/header/header.component';
import { FooterComponent } from './Header-Footer/footer/footer.component';
import { HomeComponent } from './Main/home/home.component';
import { SearchComponent } from './Main/home/search/search.component';
import { MovieCardComponent } from './Main/home/movie-card/movie-card.component';
import { AboutComponent } from './Main/about/about.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../Shared/material/material.module';
import { AppRoutingModule } from '../app-routing.module';
import { ContactComponent } from './Main/contact/contact.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SearchComponent,
    MovieCardComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports:[
    HeaderComponent, 
    FooterComponent,
    HomeComponent,
    SearchComponent,
    MovieCardComponent,
    AboutComponent
  ]
})
export class PagesModule { }
