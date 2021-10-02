import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Pokemon} from './models/pokemon';
import {Subscription} from 'rxjs';
import {AppError} from './models/error';
import {usePokemons} from './store/actions/pokemons.actions';
import {PokemonsState} from './store/reducers/pokemons.reducer';
import {selectPokemonsState} from './store/selectors/pokemons.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  error: AppError;
  comparing: boolean;
  toCompare: Pokemon;
  toShow: Pokemon;
  subscription: Subscription;

  constructor(private store: Store<PokemonsState>) {
    this.subscription = this.store.pipe(select(selectPokemonsState))
      .subscribe(
        state => {
          this.error = state.error;
          this.comparing = state.comparing;
          this.toCompare = state.toCompare;
          this.toShow = state.toShow;
        }
      );
  }

  ngOnInit(): void {
    this.store.dispatch(usePokemons());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
