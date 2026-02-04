import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { MovieListComponent } from './movie-list-component/movie-list-component';
import { MovieDetaisComponent } from './movie-detais-component/movie-detais-component'; 

export const routes: Routes = [
  { path: '', component: HomeComponent },              // /
  { path: 'movies', component: MovieListComponent },  // /movies
  { path: 'movies/:id', component: MovieDetaisComponent } // /movies/1
];