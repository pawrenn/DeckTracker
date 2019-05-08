import { Component, OnInit } from '@angular/core';
import { Card } from '../shared/card.model';
import { NeededCardsService } from './needed-cards.service';

@Component({
  selector: 'app-needed-cards',
  templateUrl: './needed-cards.component.html',
  styleUrls: ['./needed-cards.component.css']
})
export class NeededCardsComponent implements OnInit {
  cards: Card[];

  constructor(private neededCardsService: NeededCardsService) { }

  ngOnInit() {
    this.cards = this.neededCardsService.getCards();
    this.neededCardsService.cardsChanged.subscribe(
      (cards: Card[]) => {
        this.cards = cards;
      }
    );
  }

}
