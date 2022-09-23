import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.css']
})

export class Game1Component implements OnInit {
  length;
  winLength;
  cards;
  winCards;
  counter;
  lastCard;
  
  constructor(){
    this.length = 9;
    this.winLength = Math.round(this.length /2);
    this.cards = new Array<Card>(this.length);
    this.winCards = new Array<number>(this.winLength);
    this.counter = 0;
    this.lastCard = 0;

    this.initCards();
    this.mixCards();

    console.log("win cards: ");
    for(let i = 0; i < this.winLength; i++)
    {
      console.log(this.winCards[i] + ", ");
    }
  }
  
  ngOnInit(): void {
  }
  
  initCards(): void{
    let st = "default";
    for(let i = 0; i < this.length; i++)
    {
      this.cards[i] = new Card(i, st);
    }
    for(let i = 0; i < this.winLength; i++)
    {
      this.winCards[i] = Math.floor(Math.random() * this.length);
    }
  }

  mixCards(): void{
    let buffer: number;
    for(let i = 0; i < 20; i++)
    {
      let indexA = Math.floor(Math.random() * this.winLength);
      let indexB = Math.floor(Math.random() * this.winLength);
      buffer = this.winCards[indexA];
      this.winCards[indexA] = this.winCards[indexB];
      this.winCards[indexB] = buffer;
    }
  }

  generateCard(): boolean {
    let num = Math.floor(Math.random() * 10);

    if(5 < num) 
    {
      return true;
    }
    else 
    {
      return false;
    }
  }
  
  getData(cardId:number): void{
    console.log("getData() id of clicked card: " + cardId);
    this.lastCard = cardId;
    this.checkWin();
  }

  checkWin(): void{
    console.log("serial: " + this.cards[this.lastCard].cardId + 
    " win card: " + this.winCards[this.counter] + 
    " counter: " + this.counter);
    if(this.winCards[this.counter] === this.cards[this.lastCard].cardId)
    {
      this.cards[this.lastCard].state = "flipped";
      if(this.counter === (this.winLength - 1))
      {
        console.log("You win!");
        this.counter = 0;
      }
    }
    else
    {
      this.cards[this.lastCard].state = "lose";
      console.log("Game over");
      this.counter = 0;
    }
    this.counter++; 
  }
}

export class Card {
  cardId: number;
  state: string;

  constructor(id: number, st: string){
    this.cardId = id;
    this.state = st;
  }
}