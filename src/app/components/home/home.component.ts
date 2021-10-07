import {Component, OnDestroy} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Subscription} from 'rxjs';

import {Pokemon} from '../../models/pokemon';
import {selectAllFavoritePokemons} from '../../store/selectors/pokemons.selectors';
import {PokemonsState} from '../../store/reducers/pokemons.reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {
  favoritePokemons: Pokemon[];
  subscription: Subscription;

  constructor(private store: Store<PokemonsState>) {
    this.subscription = this.store.pipe(select(selectAllFavoritePokemons))
      .subscribe(
        favoritePokemons => {
          this.favoritePokemons = favoritePokemons;
        });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
