import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './Core/core.module';
import { SharedModule } from './Shared/shared.module';
import { PagesModule } from './Pages/pages.module';
import { MaterialModule } from './Shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetialComponent } from './Shared/Widgets/movie-detial/movie-detial.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    SharedModule,
    PagesModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  entryComponents: [MovieDetialComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
