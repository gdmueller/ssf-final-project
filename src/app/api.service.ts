import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public _http : HttpClient) { }
  
  apiKey: string = 'ce1d0e8168eddaf77d11f05cdb3038ad';
  baseUrl: string = 'https://api.themoviedb.org/3/search/movie?';
  query: any;

  getResults() {
    const url = `${this.baseUrl}${this.apiKey}&query=${this.query}`;
    return this._http.get(url);
  }
}
