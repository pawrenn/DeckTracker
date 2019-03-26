import { Component, OnInit } from '@angular/core';
import { Card } from '../shared/card.model';

@Component({
  selector: 'app-needed-cards',
  templateUrl: './needed-cards.component.html',
  styleUrls: ['./needed-cards.component.css']
})
export class NeededCardsComponent implements OnInit {
  cards: Card[] = [
    new Card('Ugin, the Spirit Dragon', 'Planeswalker', 'https://img.scryfall.com/cards/large/en/frf/1.jpg?1517813031')
  ];
  constructor() { }

  ngOnInit() {
  }
  onCardAdded(card: Card){
    this.cards.push(card);
  }
}
