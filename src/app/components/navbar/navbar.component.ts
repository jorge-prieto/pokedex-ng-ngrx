import {Component, OnDestroy} from '@angular/core';
import {NavigationEnd, Router, RouterEvent} from '@angular/router';
import {Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';
import {Store} from '@ngrx/store';

import {searchPokemon} from '../../store/actions/pokemons.actions';
import {PokemonsState} from '../../store/reducers/pokemons.reducer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnDestroy {
  searching: boolean;
  subscription: Subscription;

  constructor(private router: Router, private store: Store<PokemonsState>) {
    this.subscription = router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe((event) => {
        const route: NavigationEnd = event as NavigationEnd;
        if (route.url === '/pokemons') {
          this.searching = true;
        } else {
          this.searching = false;
        }
      });
  }

  search(name: string): void {
    this.store.dispatch(searchPokemon({
      searchedPokemon: name.replace(/\s/g, '')
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
