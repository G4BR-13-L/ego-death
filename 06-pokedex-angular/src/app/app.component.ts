import { Component } from '@angular/core';
import { Pokemon } from './domains/Pokemon';
import { ConsumerService } from './services/consumer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokedex';

  pokemonName: string = "";
  pokemon: Pokemon = new Pokemon();

  constructor(private service: ConsumerService) {
    this.service.find("ditto").subscribe({
      next: (result: Pokemon) => {
        this.pokemon = result;
        console.log(result as Pokemon)
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  findPokemon(){
    console.log("Ok:"+this.pokemonName)
  }
}
