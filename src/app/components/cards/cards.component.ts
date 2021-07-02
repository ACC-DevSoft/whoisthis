import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  public characters: any[];

  constructor(public service: ServiceService) {
    this.characters = [];
  }

  ngOnInit(): void {
    this.service.getCharacters().subscribe(
      (res: any) => {
        this.characters = res;
        console.log(this.characters);
        
      }
    )
  }

}
