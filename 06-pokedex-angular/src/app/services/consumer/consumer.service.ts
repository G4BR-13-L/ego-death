import { EvolutionChain } from './../../domains/Specie';
import { Pokemon } from '../../domains/Pokemon';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Specie } from 'src/app/domains/Specie';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  constructor(private http: HttpClient) { }

  readonly URL_API = `https://pokeapi.co/api/v2/pokemon/`
  readonly URL_SPECIE = `https://pokeapi.co/api/v2/pokemon-species/`
  readonly URL_EVOLUTION_CHAIN = `https://pokeapi.co/api/v2/evolution-chain/`

  find(param: string): Observable<Pokemon> {

    return this.http.get(`${this.URL_API}${param}`) as Observable<Pokemon>;

  }


  getSpecie(param: string): Observable<Specie>{
    return this.http.get(`${this.URL_SPECIE}${param}`) as Observable<Specie>;
  }

  getEvolutionChain(param: string): Observable<EvolutionChain>{
    return this.http.get(`${this.URL_EVOLUTION_CHAIN}${param}`) as Observable<EvolutionChain>;
  }
}
