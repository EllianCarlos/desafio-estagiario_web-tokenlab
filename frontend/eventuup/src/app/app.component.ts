import { Component, OnInit } from '@angular/core';

import api from './services/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  info;
  user_id;
  eventosArray;

  constructor() {
    this.ngOnInit();
  }

  async ngOnInit() {
    api.get('/eventos').then(response => (this.info = response.data.eventos));
    console.log(this.info);
    this.eventosArray = await this.loadMeetings();
    // this.loadMeetings();
  }

  async loadMeetings(){
    this.user_id = sessionStorage.getItem('_id');
    const jsonUserId = {
      id:this.user_id
    };
    const eventosArray = await (await api.post('/users/eventos', jsonUserId)).data;
    localStorage.setItem('eventosArray', eventosArray);
    return eventosArray;
  }

}
