import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent{
  @Input() chCardId: number = 0;
  @Input() chIsWin: boolean = false;
  @Input() chSerialNumber = 0;

  @Output() getData = new EventEmitter<number>();

  getId(serial:number){
    this.getData.emit(serial);
  }
}