import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html'
})
export class VoterComponent implements OnInit {

  constructor() { }
//enfant
  ngOnInit(): void {
  }

  @Input()
  public questionAposer: string| null = null;



  @Output()  sAnswer: EventEmitter<string> = new EventEmitter<string>();

  vote(ans: boolean) {
if(ans === true)
this.sAnswer.emit("yes");
else
this.sAnswer.emit("no");


  }
}
