import { Pokemon, Type } from './../../domains/Pokemon';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})


export class CardComponent {

  @Input() pokemon: Pokemon = new Pokemon;
  @Input() type: any;


  constructor() {
   
  }

  getSprite() {
    if (this.pokemon.sprites?.front_default == undefined) {
      return '';
    } else {
      return this.pokemon.sprites?.front_default;
    }
  }


  getHeight() {
    if (this.pokemon.height) {
      return this.pokemon.height / 10;
    } else {
      return '';
    }
  }
  getWeight() {
    if (this.pokemon.weight) {
      return this.pokemon.weight / 10;
    } else {
      return '';
    }
  }

  

}
