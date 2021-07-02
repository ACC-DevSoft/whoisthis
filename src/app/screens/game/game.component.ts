import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {

  public character: any[];

  constructor(public service: ServiceService) {
    this.character = [];
   }

  ngOnInit(): void {
    this.service.getCharacters().subscribe(
      (res:any) => {
        this.character = res;
      }
    )
  }

}
