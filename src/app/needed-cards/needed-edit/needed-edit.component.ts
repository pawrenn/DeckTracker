import { Component, OnInit, ElementRef, ViewChild, } from '@angular/core';
import { Card } from 'src/app/shared/card.model';
import { OuterSubscriber } from 'rxjs/internal/OuterSubscriber';
import { NeededCardsService } from '../needed-cards.service';

@Component({
  selector: 'app-needed-edit',
  templateUrl: './needed-edit.component.html',
  styleUrls: ['./needed-edit.component.css']
})
export class NeededEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('typeInput') typeInputRef: ElementRef;
  @ViewChild('imageInput') imageInputRef: ElementRef;

  constructor(private neededCardService: NeededCardsService) { }

  ngOnInit() {
  }
  onAddCard(){
    const cardName = this.nameInputRef.nativeElement.value;
    const cardType = this.typeInputRef.nativeElement.value;
    const cardImage = this.imageInputRef.nativeElement.value;
    const newCard = new Card(cardName, cardType, cardImage);
    this.neededCardService.addCard(newCard);
  }
}
