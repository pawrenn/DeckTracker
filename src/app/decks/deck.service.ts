import { Deck } from './deck.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Card } from '../shared/card.model';
import { NeededCardsService } from '../needed-cards/needed-cards.service';

@Injectable()

export class DeckService {
    deckSelected = new EventEmitter<Deck>();

    private decks: Deck[] = [
        new Deck('Kruphix',
                'Ramping to Eldrazi', 
                'https://img.scryfall.com/cards/large/en/jou/152.jpg?1517813031',
                [
                    new Card("Kruphix, God of Horizons", "Legendary Enchantment Creature - God", "https://img.scryfall.com/cards/large/en/jou/152.jpg?1517813031"),
                    new Card("Ulamog, the Infinite Gyre", "Legendary Creature - Eldrazi", "https://img.scryfall.com/cards/large/front/d/8/d8705c3e-d620-43fb-8773-65b412f555ef.jpg?1545071784")
                ]),
        new Deck('Tasigur', 
                'Copying my opponents stuff', 
                'https://img.scryfall.com/cards/large/front/d/7/d7b7d726-c395-4af4-aa6a-e8e0c0582a1f.jpg?1547517092',
                [
                    new Card("Tasigur, the Golden Fang", "Legendary Creature - Human Shaman", "https://img.scryfall.com/cards/large/front/d/7/d7b7d726-c395-4af4-aa6a-e8e0c0582a1f.jpg?1547517092"),
                    new Card("Sheoldred, Whispering One", "Legendary Creature - Praetor", "https://img.scryfall.com/cards/large/en/ima/108.jpg?1530592133")
                ])
    ];

    constructor(private neededCardsService: NeededCardsService) {}

    getDecks(){
        return this.decks.slice();
    }

    addCardsToNeededCards(cards: Card[]){
        this.neededCardsService.addCards(cards);
    }

}