import { Component } from '@angular/core';
import {Http, Response}  from '@angular/http';
@Component({

  selector: 'search',

  templateUrl: './search.component.html',

  styleUrls: ['./search.component.css']

})

export class SearchComponent {

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