import { Component, OnInit, Input } from '@angular/core';
import { Deck } from '../../deck.model';
import { DeckService } from '../../deck.service';

@Component({
  selector: 'app-deck-item',
  templateUrl: './deck-item.component.html',
  styleUrls: ['./deck-item.component.css']
})
export class DeckItemComponent implements OnInit {
  @Input() deck: Deck;

  constructor(private deckService: DeckService) { }

  ngOnInit() {
  }

  onSelected(){
    this.deckService.deckSelected.emit(this.deck);
  }
}
