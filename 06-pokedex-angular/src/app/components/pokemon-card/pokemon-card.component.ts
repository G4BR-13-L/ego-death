import { Pokemon } from './../../domains/Pokemon';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon: Pokemon = new Pokemon;
  @Input() isFavorite = false;
  @Output() removeFromFavorites = new EventEmitter<Pokemon>();
  
  constructor() { }

  ngOnInit(): void {
  }

  getSprite() {
    if (this.pokemon.sprites?.other?.dream_world.front_default == undefined) {
      return '';
    } else {
      return this.pokemon.sprites?.other?.dream_world.front_default;
    }
  }

  remove(){
    this.removeFromFavorites.emit(this.pokemon)
  }

}
