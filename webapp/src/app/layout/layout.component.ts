import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  username = '';

  constructor() {
  }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));

    this.username = user.username || '';
  }

}
