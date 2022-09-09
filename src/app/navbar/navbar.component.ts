import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onHomeClick(): void{
    this.router.navigate(['home']);
  }

  onGame1Click(): void{
    this.router.navigate(['prepare']);
  }

  onAboutClick(): void{
    this.router.navigate(['about']);
  }
  
  onLeaderbordClick(): void{
    this.router.navigate(['leaderboard']);
  }

  onAnyClick(): void{
    this.router.navigate(['pagenotfound']);
  }
  
  onDisableClick(): void{
    console.log("on disabled");
  }
}