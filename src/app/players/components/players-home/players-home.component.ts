import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players-home',
  templateUrl: './players-home.component.html',
  styleUrls: ['./players-home.component.css']
})
export class PlayersHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  doStuff(someString:string) {
    console.log(someString);
    console.log("i m doing stuff");
  }
}
