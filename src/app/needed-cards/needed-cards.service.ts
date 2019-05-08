import { Card } from '../shared/card.model';
import { EventEmitter } from '@angular/core';

export class NeededCardsService {
    
    cardsChanged = new EventEmitter<Card[]>();

    private cards: Card[] = [
        new Card('Ugin, the Spirit Dragon', 'Planeswalker', 'https://img.scryfall.com/cards/large/en/frf/1.jpg?1517813031')
      ];

    getCards(){
        return this.cards.slice();
    }

    addCard(card: Card){
        this.cards.push(card);
        this.cardsChanged.emit(this.cards.slice());
    }

    addCards(cards: Card[]){
        this.cards.push(...cards);
        this.cardsChanged.emit(this.cards.slice());
    }
}