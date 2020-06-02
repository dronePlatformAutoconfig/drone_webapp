import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.scss']
})
export class UserNavComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  getUsername() {
    return this.authService.username;
  }
}
