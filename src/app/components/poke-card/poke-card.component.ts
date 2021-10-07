import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { Pokemon } from '../../models/pokemon';
import { selectPokemon } from '../../store/actions/pokemons.actions';
import { PokemonsState } from '../../store/reducers/pokemons.reducer';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss'],
})
export class PokeCardComponent {
  @Input() pokemon: Pokemon;

  constructor(private store: Store<PokemonsState>) {}

  selectThisPokemon(pokemon: Pokemon): void {
    this.store.dispatch(selectPokemon({ pokemon }));
  }
}
