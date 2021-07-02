import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-win',
  templateUrl: './win.component.html',
  styleUrls: ['./win.component.css']
})
export class WinComponent implements OnInit {
  public winData: any;
  constructor(private router: Router) {
    this.winData = {name: "Pedro"}
   }

  ngOnInit(): void {
    this.getData();
    this.winData = localStorage.getItem('data')
  }


  home() {
    this.winData = {};
    localStorage.setItem("data", this.winData)
    this.router.navigate(['/home'])
  }

  game() {
    this.winData = {};
    localStorage.setItem('data', this.winData)
    this.router.navigate(['/game'])
  }

  getData() {
    localStorage.getItem('data');
  }
}
