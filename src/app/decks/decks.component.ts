import { Component, OnInit } from '@angular/core';
import { Deck } from './deck.model';

@Component({
  selector: 'app-decks',
  templateUrl: './decks.component.html',
  styleUrls: ['./decks.component.css']
})
export class DecksComponent implements OnInit {
  selectedDeck: Deck;

  constructor() { }

  ngOnInit() {
  }
  
}
