import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  public characters: any[];
  public idPhoto: number;
  public idName: number;
  public flag: boolean;


  constructor(public service: ServiceService) {
    this.characters = [];
    this.idPhoto = 0;
    this.idName = 0;
    this.flag = false;

  }

  ngOnInit(): void {
    this.service.getCharacters().subscribe(
      (res: any) => {
        this.characters = res;
        console.log(this.characters);

      }
    )
  }

  flipCardPhoto(idx: number) {
    console.log(idx);
    this.idPhoto = idx;
    this.flag = true

  }

  flipCardName(idx: number) {
    console.log(idx);
    this.idName = idx;
    this.flag = false;

  }

  check() {

    if (this.idPhoto === this.idName) {
      console.log('CONGRATULATIONS!!');

    }else{
      console.log('SORRY');
      
    }

  }

}
