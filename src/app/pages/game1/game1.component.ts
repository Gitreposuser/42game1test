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
    for(let i = 0; i < this.length; i++)
    {
      win = this.generateCard();
      if(win)
      {
        this.winCards++;
        this.cards[i] = new Card(i, win, this.winCards);
      }
      else
      {
        this.cards[i] = new Card(i, win, 0);
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
  
  getData(serial:number): void{
    console.log("getData() serial of clicked card: " + serial);
    this.lastCard = serial;
    this.checkWin();
  }

  checkWin(): void{
    this.counter++; 
    console.log("last card: " + this.lastCard + " counter: " + this.counter);
    if(this.lastCard === this.counter)
    {
      if(this.counter === this.winCards)
      {
        console.log("Win game");
      }
      if(this.counter > this.winCards)
      {
        console.log("Lose1 game");
      }
    }
    else
    {
      console.log("Lose2 game");
    }
  }
}

export class Card {
  cardId: number;
  isWinn: boolean;
  serialNumber: number;

  constructor(id: number, win: boolean, sn: number){
    this.cardId =id;
    this.isWinn = win;
    this.serialNumber = sn;
  }
}