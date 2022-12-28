import { Specie } from './../../../domains/Specie';
import { Pokemon } from './../../../domains/Pokemon';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ConsumerService } from 'src/app/services/consumer/consumer.service';

@Component({
  selector: 'app-pokemon-profile',
  templateUrl: './pokemon-profile.component.html',
  styleUrls: ['./pokemon-profile.component.scss']
})
export class PokemonProfileComponent implements OnInit {

  public pokemon: Pokemon = new Pokemon;
  public specie: Specie = new Specie;
  public pokemonId: string = '';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ConsumerService
  ) { }

  ngOnInit(): void {
    // this.route.queryParams.subscribe(params => {
    //   this.pokemonId = params['id'];
    //   console.log("O ID É: "+this.pokemonId)
    // });

    this.pokemonId = this.route.snapshot.paramMap.get("id") ?? '';

    this.service.find(this.pokemonId.replace('#','')).subscribe({
      next: (result: Pokemon) => {
        this.pokemon = result;
        console.log(result as Pokemon)
      },
      error: (error) => {
        console.log(error)
      }
    })

    this.service.getSpecie(this.pokemonId.replace('#','')).subscribe({
      next: (result: Specie) => {
        this.specie = result;
        console.log(result as Specie)
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  getSprite() : string{
    if (this.pokemon.sprites?.other?.dream_world.front_default == undefined) {
      return '';
    } else {
      return this.pokemon.sprites?.other?.dream_world.front_default;
    }
  }

}
