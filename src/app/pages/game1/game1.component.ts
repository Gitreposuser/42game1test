import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.css']
})

export class Game1Component implements OnInit {
  length = 9;
  items = new Array<number>(length);
  cards = new Array<number>(this.length);

  constructor() { 
    for(let i = 0; i < this.length; i++)
    {
      this.items[i] = 0;
    }
  }
  
  ngOnInit(): void {
    this.initCardStack()
  }

  mixCardDeck(): void {
    let buffer = 0;
    for(let i = 0; i < 100; i++)
    {
      let ind1 = Math.floor(Math.random() * this.length);
      let ind2 = Math.floor(Math.random() * this.length);

      buffer = this.cards[ind1];
      this.cards[ind1] = this.cards[ind2];
      this.cards[ind2] = buffer;
    }
  }

  generateCard(): number {
    let num = Math.floor(Math.random() * 10);

    if(5 < num) 
    {
      return 1;
    }
    else 
    {
      return 0;
    }
  }

  initCardStack(): void{
    for(let i = 0; i < this.cards.length; i++){
      this.cards[i] = this.generateCard();
    }
    this.mixCardDeck();
  }

  onClick(): void {
     
  }
}