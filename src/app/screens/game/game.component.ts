import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {
  public name: any;
  public score: any;


  constructor() {
    this.name = '';
    this.score = 0;
   }

  ngOnInit(): void {
    this.gameStart()
  }

  gameStart(){
    this.name = localStorage.getItem("nombre");
    console.log(this.name);
    
  }
 

}