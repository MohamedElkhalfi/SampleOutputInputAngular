import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html'
})
export class DisplayComponent implements OnInit {
theAnswer: any | null = null;
  constructor() { }
//parent
  ngOnInit(): void {
  }

  public question = "Too easy?";
  public yesAnswer = "Yes";
  public noAnswer = "no";

  Answer(event: any) {
this.theAnswer = event;
  }
}
