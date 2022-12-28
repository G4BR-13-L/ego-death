import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonProfileRoutingModule } from './pokemon-profile-routing.module';
import { PokemonProfileComponent } from './pokemon-profile/pokemon-profile.component';


@NgModule({
  declarations: [
    PokemonProfileComponent
  ],
  imports: [
    CommonModule,
    PokemonProfileRoutingModule
  ]
})
export class PokemonProfileModule { }
