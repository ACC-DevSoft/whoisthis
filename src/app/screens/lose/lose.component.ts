import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-lose',
  templateUrl: './lose.component.html',
  styleUrls: ['./lose.component.css']
})
export class LoseComponent implements OnInit {
  public loseData: any;

  constructor(private router: Router) { 
    this.loseData = {};
  
  }

  ngOnInit(): void {
  this.loseData = localStorage.getItem('data');
  }

  home(){
    this.loseData = {};
    localStorage.setItem("data", this.loseData);
    this.router.navigate(['/home']);
  }
}
