import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {
  public name: String;
  public score: any;

  public character: any[];

  constructor(public service: ServiceService) {
    this.name = '';
    this.character = [];
   }

  ngOnInit(): void {
    this.service.getCharacters().subscribe(
      (res:any) => {
        this.character = res;
      }
    )
  }
  goOut(){
    // if (comfirm(this.name + " Do you want finish the game ?")) {

    // }
  }

}
