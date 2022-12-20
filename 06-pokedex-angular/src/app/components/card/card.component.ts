import { Pokemon } from './../../domains/Pokemon';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})


export class CardComponent {

  @Input() pokemon: Pokemon = new Pokemon(); // decorate the property with @Input()
  
}
