import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public Name: String;
  public errorMessage: String;
  constructor(private router: Router) {
    this.Name = ""
    this.errorMessage = ""
   }

  ngOnInit(): void {
  }

  play(){
    if(this.Name == "") return console.log("digite algo")
    localStorage.setItem('nombre', JSON.stringify(this.Name))
    this.router.navigate(['/game'])
  }
  
}
