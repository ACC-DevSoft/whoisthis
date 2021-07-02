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
    if(this.Name == "") this.Name = "Player"
    localStorage.clear()
    localStorage.setItem('nombre', JSON.stringify(this.Name).replace('"',' ').replace('"',' '))
    this.router.navigate(['/game'])
  }
  
}
