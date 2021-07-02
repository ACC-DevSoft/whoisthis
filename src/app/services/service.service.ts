import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor( private http: HttpClient) { }

  getCharacters(){
    return this.http.get('../assets/game.json')
  }
}
