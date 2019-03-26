import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Deck } from '../deck.model';

@Component({
  selector: 'app-decklist',
  templateUrl: './decklist.component.html',
  styleUrls: ['./decklist.component.css']
})
export class DecklistComponent implements OnInit {
  decks: Deck[] = [
    new Deck('Kruphix', 'Ramping to Eldrazi', 'https://img.scryfall.com/cards/large/en/jou/152.jpg?1517813031'),
    new Deck('Tasigur', 'Copying my opponents stuff', 'https://img.scryfall.com/cards/large/front/d/7/d7b7d726-c395-4af4-aa6a-e8e0c0582a1f.jpg?1547517092')
  ];

  @Output() deckWasSelected = new EventEmitter<Deck>();

  constructor() { }

  ngOnInit() {
  }

  onDeckSelected(deck: Deck){
    this.deckWasSelected.emit(deck);
  }

}
