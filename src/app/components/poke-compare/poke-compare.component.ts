import { Component, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Pokemon } from '../../models/pokemon';
import { Subscription } from 'rxjs';
import { ModalCard } from '../modal/modal-card';
import { selectPokemonsState } from '../../store/selectors/pokemons.selectors';
import { PokemonsState } from '../../store/reducers/pokemons.reducer';

@Component({
  selector: 'app-poke-compare',
  templateUrl: './poke-compare.component.html',
  styleUrls: ['./poke-compare.component.scss'],
})
export class PokeCompareComponent extends ModalCard implements OnDestroy {
  toShow: Pokemon;
  toCompare: Pokemon;
  subscription: Subscription;

  constructor(store: Store<PokemonsState>) {
    super(store);
    this.subscription = this.store
      .pipe(select(selectPokemonsState))
      .subscribe((state) => {
        this.toShow = state.toShow;
        this.toCompare = state.toCompare;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
