import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  public characters: any[];
  public names: any[];
  public idPhoto: number;
  public idName: number;
  public flag: boolean;
  public score: number;
  public restart: boolean;


  constructor(public service: ServiceService) {
    this.characters = [];
    this.names = [];
    this.idPhoto = 0;
    this.idName = 0;
    this.score = 0;
    this.flag = false;
    this.restart = false;

  }

  ngOnInit(): void {

    this.starGame();

  }

  starGame() {
    this.service.getCharacters().subscribe(
      (res: any) => {
        this.names = res;
        this.characters = _.shuffle(this.names);

      }
    )

  }

  restarGame() {
    this.idPhoto = 0;
    this.idName = 0;
    this.score = 0;
    this.flag = false;
    this.starGame();
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

    this.check();

  }

  check() {

    if (this.idPhoto === this.idName) {
      console.log('CONGRATULATIONS!!');
      setTimeout(() => {
        this.characters = this.characters.filter(chracter => chracter.id !== this.idPhoto);
        this.names = this.names.filter(name => name.id !== this.idName);

      }, 1000);

      console.log('Lenght is :', this.characters.length);


      if (this.characters.length === 1) {
        this.restart = true;
      } else {
        this.restart = false;
      }



    } else {
      console.log('SORRY');
    }

  }

}
