import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {
  public name: String;
  public score: any;

  constructor(private router: Router) { 
    this.name = 'David';
    this.score = 0;
  }

  ngOnInit(): void {
  }
  goOut(){
    // if (comfirm(this.name + " Do you want finish the game ?")) {

    // }
  }

}