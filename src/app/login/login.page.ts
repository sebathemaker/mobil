import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router) { }

  login() {
    // Aquí puedes verificar las credenciales del usuario y redirigirlo si es válido
    // Por ejemplo, puedes usar un servicio de autenticación o una API para validar los datos ingresados por el usuario
    // Si las credenciales son válidas, puedes redirigir al usuario a la página principal
    // Ejemplo:
    if (this.username === 'usuario' && this.password === 'contraseña') {
      this.router.navigate(['/home']); // Redirige a la página principal (ajusta la ruta según tu estructura de rutas)
    } else {
      // Maneja el caso de credenciales incorrectas aquí
      console.log('Credenciales incorrectas');
    }
  }
}
