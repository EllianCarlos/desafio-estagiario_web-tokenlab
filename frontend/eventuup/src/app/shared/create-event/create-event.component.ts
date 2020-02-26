import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import api from '../../services/api';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  createEvents = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    start: new FormControl(''),
    end: new FormControl(''),
    invited: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

  async handleNewEvent(){
    const _id = sessionStorage.getItem('_id');
    const response = await (await api.post('/eventos', {
      creator: _id,
      name: this.createEvents.value.name,
      description: this.createEvents.value.description,
      start: this.createEvents.value.start,
      end: this.createEvents.value.end,
      full_day: false,
      invited: []
    })).data;
    console.log(response);
    return response;
  }


}
