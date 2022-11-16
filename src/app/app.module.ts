import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardsListComponent } from './cards/components/cards-list/cards-list.component';
import { DelayDirective } from './cards/directives/delay.directive';

@NgModule({
  declarations: [AppComponent, CardsListComponent, DelayDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
