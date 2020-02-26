import { Component, OnInit } from '@angular/core';
import { DayBallComponent } from '../day-ball/day-ball.component';

@Component({
  selector: 'app-callendar',
  templateUrl: './callendar.component.html',
  styleUrls: ['./callendar.component.scss']
})
export class CallendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fillNumbers(): Number[] {
    const array = [];
    for (let i = 0; i <= 31; i++) {
      array[i] = i;
    }

    return array;
  }



}
