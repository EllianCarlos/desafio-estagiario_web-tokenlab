import { Component, OnInit } from '@angular/core';

import api from './services/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  info;

  constructor() {
    this.ngOnInit();
  }

  ngOnInit(): void {
    api.get('/eventos').then(response => (this.info = response.data.eventos));
    console.log(this.info);
  }

}
