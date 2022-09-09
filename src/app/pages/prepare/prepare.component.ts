import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prepare',
  templateUrl: './prepare.component.html',
  styleUrls: ['./prepare.component.css']
})
export class PrepareComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onStartClick(): void{
    this.router.navigate(['game1']);
  }
}
