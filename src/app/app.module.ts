import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { PokeInfoComponent } from './components/poke-info/poke-info.component';
import { PokeCompareComponent } from './components/poke-compare/poke-compare.component';
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ModalComponent } from './components/modal/modal.component';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { PokemonsModule } from './store/pokemons.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PokemonsEffects } from './store/effects/pokemons.effects';
import { ChartsComponent } from './components/charts/charts.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    PokeInfoComponent,
    PokeCompareComponent,
    PokeCardComponent,
    NavbarComponent,
    ModalComponent,
    HomeComponent,
    ChartsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    PokemonsModule,
    FormsModule,
    HttpClientModule,
    StoreDevtoolsModule,
    InfiniteScrollModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([PokemonsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
