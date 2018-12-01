import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css']
})
export class AuthLayoutComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onLogin(username: string) {
    localStorage.setItem('user', JSON.stringify({username: username}));
    this.router.navigate(['dashboard']);
  }
}
