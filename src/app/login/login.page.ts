import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private userService: UserService) {}

  login() {
    if (this.username === 'usuario' && this.password === 'contraseña') {
      this.userService.setCurrentUser({ username: this.username });
      console.log('Usuario autenticado:', this.userService.getCurrentUser());
      this.router.navigate(['/home']); 
    } else {
      console.log('Credenciales incorrectas');
    }
  }
}
