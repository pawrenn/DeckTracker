import { Component, OnInit } from '@angular/core';
import { Deck } from './deck.model';
import { DeckService } from './deck.service';

@Component({
  selector: 'app-decks',
  templateUrl: './decks.component.html',
  styleUrls: ['./decks.component.css'],
  providers: [DeckService]
})
export class DecksComponent implements OnInit {
  selectedDeck: Deck;

  constructor(private deckService: DeckService) { }

  ngOnInit() {
    this.deckService.deckSelected.subscribe(
      (deck: Deck) => {
      this.selectedDeck = deck;
      }
    );
  }
  
}
