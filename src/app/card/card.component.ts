import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent{
  @Input() chCardId: number = 0;
  @Input() chState = 'default';

  @Output() getData = new EventEmitter<number>();

  getId(chCardId:number){
    this.getData.emit(chCardId);
    /*
    if('default' === this.chState)
    {
      this.chState = 'flipped';
    }
    else
    {
      this.chState = 'default';
    }
    */
  }
}