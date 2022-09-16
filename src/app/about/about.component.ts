import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  path: string;
  photo: string;

  constructor(private router: Router) { 
    this.path = "../../assets/images/";
    this.photo = "catphoto.png";
  }

  ngOnInit(): void {
  }

  onBackClick(): void{
    this.router.navigate(['home']);
  }

  onImgClick(): void{
    if("catphoto.png" === this.photo)
    {
      this.photo = "logoclean.png";
    }
    else
    {
      this.photo = "catphoto.png";
    }
  }
}