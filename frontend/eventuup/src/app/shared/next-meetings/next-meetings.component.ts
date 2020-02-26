import { Component, OnInit, Input, NgModule } from '@angular/core';
import {MeetingComponent} from '../meeting/meeting.component';

// @NgModule({

// })

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
