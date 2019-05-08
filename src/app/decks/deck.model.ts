import { Card } from '../shared/card.model';

export class Deck{
    public name: string;
    public description: string;
    public imagePath: string;
    public cards: Card[];

    constructor(name: string, desc: string, imagePath: string, cards: Card[]){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.cards = cards;
    }
}