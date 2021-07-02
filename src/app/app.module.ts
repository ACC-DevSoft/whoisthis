import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './screens/game/game.component';
import { WinComponent } from './screens/win/win.component';
import { LoseComponent } from './screens/lose/lose.component';
import { HomeComponent } from './screens/home/home.component';
import { CardsComponent } from './components/cards/cards.component';

import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    WinComponent,
    LoseComponent,
    HomeComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
