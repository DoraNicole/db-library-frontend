import {Component, OnInit} from '@angular/core';
import {Route, Router} from '@angular/router';
import {AuthenticationService} from '../../services/autentication.service';
import { ForbiddenService } from 'src/app/services/forbidden.service';
import { UserService } from 'src/app/services/user.service';
import * as jwt_decode from 'jwt-decode'

@Component({
  selector: 'app-forbidden',
  templateUrl: './forbidden.component.html',
  styleUrls: ['./forbidden.component.css']
})
export class ForbiddenComponent implements OnInit {

  email: string;

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private forbiddenService : ForbiddenService,
              private userService: UserService) {
  }

  ngOnInit() {
    let token = this.authenticationService.getToken();
    let decode = jwt_decode(token);
    this.email = decode['sub'];

    //this.username = JSON.parse(localStorage.getItem('currentUser')).email.toString;
  }

  sendToLogin() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  resendVerificationEmail() {
    this.forbiddenService
    .resendVerification(this.email)
    .subscribe(
      data=>{
        console.log("hello from forbidden");
      }
    )
  }

}
