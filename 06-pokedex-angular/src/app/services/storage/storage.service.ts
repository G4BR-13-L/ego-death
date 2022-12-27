import { Pokemon } from './../../domains/Pokemon';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  savePokemon(pokemon: Pokemon) {
    let history: Pokemon[] = this.getHistory();
    history.push(pokemon);
    this.save('history', history);
  }

  init() {
    if (!this.getHistory()) {
      this.cleanCollection('history');
    }
    if (!this.getFavorites) {
      this.cleanCollection('favorites');
    }
  }

  saveFavorites(favorites: Pokemon[]):void {
    this.save('favorites', favorites);
  }

  getHistory() {
    return this.get('history');
  }

  getFavorites(): any {
    return this.get('favorites');
  }

  cleanCollection(key: string): void{
    localStorage.setItem(key, JSON.stringify([]));
  }

  private save(key: string, value: any): void{
    localStorage.setItem(key, JSON.stringify(value));
  } 

  private get(key: string): any{
    return JSON.parse(localStorage.getItem(key) ?? JSON.stringify([]));
  }
}
