import { Component, OnInit } from '@angular/core';

import axios from 'axios';

const urlAPI = 'http://localhost:3333';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  info;

  constructor(){
    this.ngOnInit();
  }

  ngOnInit() :void {
    axios.get(urlAPI+'/eventos').then(response => (this.info = response.data.eventos));
    console.log(this.info);
  }


}
