import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  photo_url;
  name;
  email;


  constructor() {}

  ngOnInit(): void {}

  render() {
    if (
      sessionStorage.getItem('token') ||
      sessionStorage.getItem('status') == 'logged'
    ) {
      this.photo_url = sessionStorage.getItem('photo_url');
      this.name = sessionStorage.getItem('name');
      this.email = sessionStorage.getItem('email');
      return false;
    } else {
      return true;
    }
  }

  click(event) {

  }

}
