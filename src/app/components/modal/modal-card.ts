import {Store} from '@ngrx/store';
import {closeModal} from '../../store/actions/pokemons.actions';
import {PokemonsState} from '../../store/reducers/pokemons.reducer';

export class ModalCard {

  constructor(protected store: Store<PokemonsState>) {
    this.store = store;
  }

  closeParentModal(): void {
    this.store.dispatch(closeModal());
  }
}
