import {AbstractControl} from '@angular/forms';

export class Registration {
  firstName: string;
  lastName: string;
  password: string;
  email: string;


  constructor(firstName: string, lastName: string, password: string, email: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.email = email;
  }
}
