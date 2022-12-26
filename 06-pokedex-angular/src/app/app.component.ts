import { Component, OnInit } from '@angular/core';
import { Pokemon } from './domains/Pokemon';
import { ConsumerService } from './services/consumer/consumer.service';
import { cleanStorage, getFavorites, getHistory, init, saveFavorites, savePokemon } from './services/storage/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pokedex';

  pokemonName: string = "";
  history: Pokemon[] = [];
  favorites: Pokemon[] = [];

  public pokemon: Pokemon = new Pokemon;

  constructor(private service: ConsumerService) {

  }

  ngOnInit() {
    init();
    this.history = getHistory();
    this.favorites = getFavorites();
    this.service = this.service;
    this.service.find("arceus").subscribe({
      next: (result: Pokemon) => {
        this.pokemon = result;
        console.log(result as Pokemon)
      },
      error: (error) => {
        console.log(error)
      }
    })

  }

  findPokemon() {
    this.service.find(
      this.pokemonName
        .toLowerCase()
        .trim()
        .replace(',', '')
        .replace('#', '')).subscribe({
          next: (result: Pokemon) => {
            this.pokemon = result;
            this.addToHistory(this.pokemon)
            console.log(result as Pokemon)
          },
          error: (error) => {
            console.log(error)
          }
        })
    console.log("Ok:" + this.pokemonName)
  }

  addToHistory(poke: Pokemon) {
    for (let p of this.history) {
      if (p.id == poke.id) {
        return;
      }
    }
    this.history.push(poke);
    savePokemon(poke);
  }
  addToFavorites(poke: Pokemon) {
    console.log("Adicionaod aos favoritos: " + poke.name)
    for (let p of this.favorites) {
      if (p.id == poke.id) {
        return;
      }
    }
    if (this.favorites.length < 10) {
      this.favorites.push(poke);
      saveFavorites(this.favorites);
    }
  }

  removeFromFavorites(poke: Pokemon) {
    console.log("removido dos favoritos: " + poke.name)
    this.favorites = this.favorites.filter((p) => p.id != poke.id)
    saveFavorites(this.favorites);

  }

  viewPokemon(poke: Pokemon) {
    this.pokemon = poke;
  }

  cleanHistory() {
    if (confirm("Tem certeza que deseja apagar o histórico?")) {
      cleanStorage();
      this.history = getHistory();
    }
  }
}
