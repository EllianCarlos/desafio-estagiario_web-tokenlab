import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss']
})

export class MeetingComponent implements OnInit {


  @Input() meet;

  name;
  description;
  start;
  end;
  invited;

  constructor() {
    this.ngOnInit();
  }

  ngOnInit(): void {
    if(this.meet) {
      this.name = this.meet.name;
      this.description = this.meet.description;
      this.start = this.meet.start;
      this.end = this.meet.end;
      this.invited = this.meet.invited;

    }
  }

}
