import {Component, OnInit} from '@angular/core';
import { first } from 'rxjs/operators';

import {User} from '../models/user';
import {UserService} from '../_services/user.service';
import {Book} from '../models/book';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit{
  loading = false;
  users: Book[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loading = true;
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.loading = false;
      this.users = users;
    });
  }
}
