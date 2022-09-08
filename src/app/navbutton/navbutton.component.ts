import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbutton',
  templateUrl: './navbutton.component.html',
  styleUrls: ['./navbutton.component.css']
})

export class NavbuttonComponent implements OnInit {
  public buttonText = '';

  @Input()
  set text(name: string){
    this.buttonText = name;
  }
  get name(): string{
    return this.buttonText;
  }

  @Input() type: string = 'button';
  @Output() btnClick = new EventEmitter();
  @Input() isDisabled = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.btnClick.emit();
  }
}
