import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Output() increamentOnEachInterval = new EventEmitter<number>(); //outputting this to app component
  interval;
  previousNum=0;
  constructor() { }

  ngOnInit(): void {
  }
  onStart(){
    this.interval= setInterval(()=> {
    this.increamentOnEachInterval.emit(this.previousNum+1);
    this.previousNum++;
    },1000)
  }
  onStop(){
    clearInterval(this.interval);
  }

}
