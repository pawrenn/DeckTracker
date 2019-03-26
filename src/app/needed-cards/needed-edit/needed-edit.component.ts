import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Card } from 'src/app/shared/card.model';
import { OuterSubscriber } from 'rxjs/internal/OuterSubscriber';

@Component({
  selector: 'app-needed-edit',
  templateUrl: './needed-edit.component.html',
  styleUrls: ['./needed-edit.component.css']
})
export class NeededEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('typeInput') typeInputRef: ElementRef;
  @ViewChild('imageInput') imageInputRef: ElementRef;
  @Output() cardAdded = new EventEmitter<Card>();

  constructor() { }

  ngOnInit() {
  }
  onAddCard(){
    const cardName = this.nameInputRef.nativeElement.value;
    const cardType = this.typeInputRef.nativeElement.value;
    const cardImage = this.imageInputRef.nativeElement.value;
    const newCard = new Card(cardName, cardType, cardImage);
    this.cardAdded.emit(newCard);
  }
}
