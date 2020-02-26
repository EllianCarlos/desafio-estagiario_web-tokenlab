import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

import api from '../../services/api';

// import { StorageService } from '../../services/storageServices';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  photoUrl;
  name;
  email;

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

  loginHandle() {}

  constructor() {}

  ngOnInit(): void {}

  render() {
    if (
      sessionStorage.getItem('token') ||
      sessionStorage.getItem('status') == 'logged'
    ) {
      this.photoUrl = sessionStorage.getItem('photo_url');
      this.name = sessionStorage.getItem('name');
      this.email = sessionStorage.getItem('email');
      return false;
    } else {
      return true;
    }
  }

  click(event) {
    sessionStorage.setItem('eventHolder', event);
  }
}
