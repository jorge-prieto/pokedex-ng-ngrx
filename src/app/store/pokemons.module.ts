import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { pokemonsKey } from './reducers/pokemons.reducer';
import * as fromFavoritePokemons from './reducers/pokemons.reducer';
@NgModule({
  imports: [StoreModule.forFeature(pokemonsKey, fromFavoritePokemons.reducer)],
})
export class PokemonsModule {}
