import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-next-meetings',
  templateUrl: './next-meetings.component.html',
  styleUrls: ['./next-meetings.component.scss']
})
export class NextMeetingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() meetings: JSON;

}