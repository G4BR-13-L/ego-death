import { Pokemon, Type } from './../../domains/Pokemon';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})


export class CardComponent {

  @Input() pokemon: Pokemon = new Pokemon;
  @Input() type: any;
  @Output() addToFavorites = new EventEmitter<Pokemon>();


  constructor() {
   
  }

  getSprite() : string{
    if (this.pokemon.sprites?.other?.dream_world.front_default == undefined) {
      return '';
    } else {
      return this.pokemon.sprites?.other?.dream_world.front_default;
    }
  }

  add(): void{
    this.addToFavorites.emit(this.pokemon)
  }

  getHeight() {
    if (this.pokemon.height) {
      return this.pokemon.height / 10;
    } else {
      return '';
    }
  }
  getWeight() : number{
    if (this.pokemon.weight) {
      return this.pokemon.weight / 10;
    } else {
      return 0;
    }
  }

  

}
