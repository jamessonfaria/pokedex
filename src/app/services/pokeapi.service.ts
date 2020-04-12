import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface PokeListResponse{
  created: string,
  modified: string,
  name: string,
  pokemon: any[],
  resource_uri: string
}

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private url = '//dev.treinaweb.com.br/pokeapi';

  pokemonList = [];

  constructor(
    private http: HttpClient
  ) { }

  listAll(){
    this.http.get<PokeListResponse>(`${this.url}/pokedex/1`)
      .subscribe(
        response => {
          response.pokemon.forEach(pokemon => {
            pokemon.number = this.getNumberFromUrl(pokemon.resource_uri);
          })
          this.pokemonList = this
            .sortPokeman(response.pokemon)
            .filter(pokemon => pokemon.number < 50)
            .slice(0,9);
        }
      )
  }

  private getNumberFromUrl(url){
    return parseInt(url.replace(/.*\/(\d+)\/$/, '$1'));
  }

  private sortPokeman(pokemonList){
    return pokemonList.sort((a, b) => {
      return (a.number > b.number ? 1 : -1);
    });
  }
}
