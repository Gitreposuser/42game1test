import { Component, Input, Output } from '@angular/core';
//import { EventEmitter } from 'stream';
import { ICardData } from './card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent{
  @Input() data: ICardData = { cardId: 0, state: "default"};
//  @Output() CardComponent = new EventEmitter();

  constructor() { }
  
  cardClicked(): void{
    if(this.data.state === "default"){
      this.data.state = "flipped";
    } else {
      this.data.state = "default";
    }
  }
}