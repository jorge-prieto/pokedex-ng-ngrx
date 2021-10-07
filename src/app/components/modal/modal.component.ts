import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { closeModal } from 'src/app/store/actions/pokemons.actions';
import { PokemonsState } from '../../store/reducers/pokemons.reducer';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() errorCard: boolean;

  constructor(private store: Store<PokemonsState>) {}

  closeModal(event: Event): void {
    if (event.currentTarget === event.target) {
      this.store.dispatch(closeModal());
    }
  }
}
