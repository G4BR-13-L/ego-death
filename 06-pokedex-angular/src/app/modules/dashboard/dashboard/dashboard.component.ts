import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pokemon } from 'src/app/domains/Pokemon';
import { ConsumerService } from 'src/app/services/consumer/consumer.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title = 'pokedex';

  pokemonName: string = "";
  history: Pokemon[] = [];
  favorites: Pokemon[] = [];

  public historyIsCleanable: boolean = true;
  public FavoritesIsCleanable: boolean = true;
  public listaNegraDeCaracteres: string[] = ['¨', '¨¨', '&', '¨¨&'];

  public pokemon: Pokemon = new Pokemon;

  public pokemonForm: FormGroup<any> = this.formBuilder.group({
    pokemonName: ['', [
      Validators.required,
      Validators.maxLength(10)
    ]],
  });

  constructor(
    private service: ConsumerService,
    private formBuilder: FormBuilder,
    private storage: StorageService
  ) {

  }


  ngOnInit() {
    this.storage.init();
    this.history = this.storage.getHistory();
    this.favorites = this.storage.getFavorites();
    if (this.history.length > 0) {
      this.historyIsCleanable = false;
    } if (this.favorites.length > 0) {
      this.FavoritesIsCleanable = false;
    }
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

  keyPressAlphaNumeric(event: { keyCode: number; preventDefault: () => void; }) {
    var inp = String.fromCharCode(event.keyCode);
    if (/[a-zA-Z0-9\n]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  keyPressEnter(event: { which: any; keyCode: any; preventDefault: () => void; }) {
    var charCode = event.keyCode;
    if (charCode == 13) {
      this.onSubmit();
      return true;
    } else {
      return;
    }
  }

  prepareString(str: string): string {

    for (let i = 0; i < this.listaNegraDeCaracteres.length; i++) {
      str.replace(this.listaNegraDeCaracteres[i], '');
    }

    return str;

  }
  onSubmit(): void {
    this.service.find(
      this.prepareString(this.pokemonForm.value.pokemonName
        .toLowerCase()
        .trim()
        .replace(',', '')
        .replace('#', ''))).subscribe({
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

  addToHistory(poke: Pokemon): void {
    for (let p of this.history) {
      if (p.id == poke.id) {
        return;
      }
    }
    this.historyIsCleanable = false;
    this.history.push(poke);
    this.storage.savePokemon(poke);
  }
  addToFavorites(poke: Pokemon): void {
    console.log("Adicionaod aos favoritos: " + poke.name)
    for (let p of this.favorites) {
      if (p.id == poke.id) {
        return;
      }
    }
    this.FavoritesIsCleanable = false;
    if (this.favorites.length < 10) {
      this.favorites.push(poke);
      this.storage.saveFavorites(this.favorites);
    }
  }

  removeFromFavorites(poke: Pokemon): void {
    console.log("removido dos favoritos: " + poke.name)
    this.favorites = this.favorites.filter((p) => p.id != poke.id)
    this.storage.saveFavorites(this.favorites);

  }

  viewPokemon(poke: Pokemon): void {
    this.pokemon = poke;
  }

  cleanHistory(): void {
    if (confirm("Tem certeza que deseja apagar o histórico?")) {
      this.storage.cleanCollection('history');
      this.history = this.storage.getHistory();
      this.historyIsCleanable = true;
    }
  }

  cleanFavorites(): void {
    if (confirm("Tem certeza que deseja apagar os favoritos?")) {
      this.storage.cleanCollection('favorites');
      this.favorites = this.storage.getFavorites();
      this.FavoritesIsCleanable = true;
    }
  }
}
