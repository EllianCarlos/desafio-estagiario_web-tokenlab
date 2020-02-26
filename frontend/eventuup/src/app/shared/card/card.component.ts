import { Component, OnInit, Input } from '@angular/core';
import {  FormGroup, FormControl} from '@angular/forms';

import api from '../../services/api';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}


  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  async handleSubmit() {
    const response = await api.post('/session', {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    });

    if (!response.data._id) {
      sessionStorage.setItem('_id', response.data.Admin._id);
      sessionStorage.setItem('name', response.data.Admin.name);
      sessionStorage.setItem('email', response.data.Admin.email);
      sessionStorage.setItem('photo_url', response.data.Admin.photo_url);
      sessionStorage.setItem('token', response.data.token);
      sessionStorage.setItem('status', 'logged');
    } else {
      console.warn('Erro: Credenciais erradas');
      console.warn(response.data);
    }
  }

  loginHandle() {

  }
}
