import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPage {
  username: string = '';
  password: string = '';


  registeredUsers: { username: string, password: string }[] = [];

  constructor(private router: Router) { }

  registerUser() {
    if (this.registeredUsers.find(user => user.username === this.username)) {

      alert('El nombre de usuario ya está registrado.');
    } else {

      this.registeredUsers.push({ username: this.username, password: this.password });
      this.router.navigate(['/login']);
    }
  }
}
