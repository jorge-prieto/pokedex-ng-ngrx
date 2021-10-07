import { Component, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Pokemon } from '../../models/pokemon';
import { Subscription } from 'rxjs';
import { ModalCard } from '../modal/modal-card';
import { selectPokemonsState } from '../../store/selectors/pokemons.selectors';
import { comparePokemons } from '../../store/actions/pokemons.actions';
import { PokemonsState } from '../../store/reducers/pokemons.reducer';

@Component({
  selector: 'app-poke-info',
  templateUrl: './poke-info.component.html',
  styleUrls: ['./poke-info.component.scss'],
})
export class PokeInfoComponent extends ModalCard implements OnDestroy {
  pokemon: Pokemon;
  subscription: Subscription;

  constructor(store: Store<PokemonsState>) {
    super(store);
    this.subscription = this.store
      .pipe(select(selectPokemonsState))
      .subscribe((state) => {
        this.pokemon = state.toShow;
      });
  }

  compare(): void {
    this.store.dispatch(comparePokemons());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
