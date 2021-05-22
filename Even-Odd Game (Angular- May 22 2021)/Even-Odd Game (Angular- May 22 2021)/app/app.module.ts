import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EvenNumberComponent } from './even-number/even-number.component';
import { OddNumberComponent } from './odd-number/odd-number.component';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    EvenNumberComponent,
    OddNumberComponent,
    GameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
