import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DecksComponent } from './decks/decks.component';
import { DeckDetailComponent } from './decks/deck-detail/deck-detail.component';
import { DeckItemComponent } from './decks/decklist/deck-item/deck-item.component';
import { NeededCardsComponent } from './needed-cards/needed-cards.component';
import { NeededEditComponent } from './needed-cards/needed-edit/needed-edit.component';
import { DecklistComponent } from './decks/decklist/decklist.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { NeededCardsService } from './needed-cards/needed-cards.service';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: DecksComponent},
  {path: 'Decklists', component: DecksComponent},
  {path: 'Needed-Cards', component: NeededCardsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DecksComponent,
    DeckDetailComponent,
    DeckItemComponent,
    NeededCardsComponent,
    NeededEditComponent,
    DecklistComponent,
    DropdownDirective
    ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [NeededCardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
