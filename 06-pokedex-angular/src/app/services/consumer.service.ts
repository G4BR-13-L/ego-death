import { Pokemon } from '../domains/Pokemon';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  constructor(private http: HttpClient) { }

  readonly URL_API = `https://pokeapi.co/api/v2/pokemon/`

  find(  param:string ): Observable<Pokemon> {
    return this.http.get(`${this.URL_API}${param}` )
  }
}
