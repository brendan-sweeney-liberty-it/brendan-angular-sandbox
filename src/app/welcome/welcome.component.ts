import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  welcomeStatus = true;
  constructor() { }

  ngOnInit() {
  
  }

  close() {
    this.welcomeStatus = false;
    
  }

}