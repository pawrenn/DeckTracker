import { Component, OnInit, Input } from '@angular/core';
import { Deck } from '../deck.model';
import { DeckService } from '../deck.service';

@Component({
  selector: 'app-deck-detail',
  templateUrl: './deck-detail.component.html',
  styleUrls: ['./deck-detail.component.css']
})
export class DeckDetailComponent implements OnInit {
  @Input() deck: Deck;

  constructor(private deckService: DeckService) { }

  ngOnInit() {
  }

  onAddToNeededCards(){
    this.deckService.addCardsToNeededCards(this.deck.cards);
  }

}
