import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.css']
})

export class Game1Component implements OnInit {
  length;
  cards;
  counter;
  winCounter;
  winCards;
  lastCard;
  
  constructor(){
    this.length = 9;
    this.cards = new Array<Card>(this.length);
    this.counter = 0;
    this.winCounter = 0;
    this.winCards = 0;
    this.lastCard = 0;

    this.initCards();
    this.mixCards();
  }
  
  ngOnInit(): void {
  }
  
  initCards(): void{
    let win = false;
    let st = "default";
    for(let i = 0; i < this.length; i++)
    {
      win = this.generateCard();
      if(win)
      {
        this.winCards++;
        this.cards[i] = new Card(i, win, this.winCards, st);
      }
      else
      {
        this.cards[i] = new Card(i, win, 0, st);
      }
    }
  }

  mixCards(): void{
    let buffer: Card;
    for(let i = 0; i < 20; i++)
    {
      let indexA = Math.floor(Math.random() * this.length);
      let indexB = Math.floor(Math.random() * this.length);
      buffer = this.cards[indexA];
      this.cards[indexA] = this.cards[indexB];
      this.cards[indexB] = buffer;
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
    this.counter++; 
    console.log("serial: " + this.cards[this.lastCard].serialNumber + 
      " counter: " + this.counter);
    if(this.cards[this.lastCard].serialNumber === this.counter)
    {
      if(this.counter === this.winCards)
      {
        console.log("Win game");
      }
      if(this.counter > this.winCards)
      {
        this.cards[this.lastCard].state = "lose";
        console.log("Lose1 game");
      }
    }
    else
    {
      this.cards[this.lastCard].state = "lose";
      console.log("Lose2 game");
    }
  }
}

export class Card {
  cardId: number;
  isWinn: boolean;
  serialNumber: number;
  state: string;

  constructor(id: number, win: boolean, sn: number, st: string){
    this.cardId =id;
    this.isWinn = win;
    this.serialNumber = sn;
    this.state = st;
  }
}