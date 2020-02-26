import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-day-ball',
  templateUrl: './day-ball.component.html',
  styleUrls: ['./day-ball.component.scss']
})
export class DayBallComponent implements OnInit {

  @Input() number :Number;

  constructor() { }

  ngOnInit(): void {
  }

}
