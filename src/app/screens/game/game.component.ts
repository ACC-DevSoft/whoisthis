import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ServiceService } from '../../services/service.service';

=======
import { Router } from "@angular/router";
>>>>>>> main
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {
  public name: String;
  public score: any;

<<<<<<< HEAD
  public character: any[];

  constructor(public service: ServiceService) {
    this.character = [];
   }
=======
  constructor(private router: Router) { 
    this.name = 'David';
    this.score = 0;
  }
>>>>>>> main

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
