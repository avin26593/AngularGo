import { NavbarComponent } from './navbar/navbar.component';
import { Component } from '@angular/core';
import {Http, Response}  from '@angular/http';

@Component({
  selector: 'my-app',
  template: `
              <go-navbar></go-navbar>
              
              <router-outlet></router-outlet>'
              <foot></foot>
              

  `,
})
export class AppComponent {
  title = 'Movie Cruiser';
  link = 'https://maps.googleapis.com/maps/api/place/textsearch/json?';

  movies = [];
  
  constructor(private http: Http) {
  }
  performSearch(searchTerm: HTMLInputElement): void {
    var apiLink = this.link +'query=' + (searchTerm.value) + '&key=AIzaSyDGC4QyNkl59SFRctcWtplUOPcWYLZKOgo';
    
    this.http.get(apiLink)
    .subscribe((res: Response) => {
      this.movies = res.json().results;
      console.log(this.movies);
    });
  } 
 };