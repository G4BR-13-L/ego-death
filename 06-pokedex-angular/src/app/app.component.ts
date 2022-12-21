import { Component } from '@angular/core';
import { Pokemon } from './domains/Pokemon';
import { ConsumerService } from './services/consumer/consumer.service';
import { getHistory, init, savePokemon } from './services/storage/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokedex';

  pokemonName: string = "";
  history: Pokemon[] = [];

  public pokemon: Pokemon = new Pokemon;

  constructor(private service: ConsumerService) {
    init();
    this.history = getHistory();
    this.service = service;
    this.service.find("arceus").then((result: Pokemon) => {
      console.log(result)
      this.pokemon = result;
    }
    )
      .catch((err) => console.log(err));
  }

  findPokemon() {
    savePokemon(this.pokemon)
    this.history = getHistory();
    this.service.find(this.pokemonName).then((result: Pokemon) => {
      console.log(result)
      this.pokemon = result;
    }
    )
      .catch((err) => console.log(err));
    console.log("Ok:" + this.pokemonName)
  }
}
