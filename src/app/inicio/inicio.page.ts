import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  username: string = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    const currentUser = this.userService.getCurrentUser();
    if (currentUser) {
      this.username = currentUser.username;
    }
  }

  navigateToOption(option: string) {
    // Lógica para manejar las opciones del menú
    // Puedes redirigir a otras páginas según la opción seleccionada
    switch (option) {
      case 'Opción 1':
        // Redirigir a la página correspondiente
        this.router.navigate(['/opcion1']);
        break;
      case 'Opción 2':
        // Redirigir a la página correspondiente
        this.router.navigate(['/opcion2']);
        break;
      default:
        // Manejar otras opciones si es necesario
        break;
    }
  }

  logout() {
    // Realizar la lógica de cierre de sesión, por ejemplo, limpiar el usuario actual
    this.userService.setCurrentUser({ username: '' });

    // Redirigir a la página de inicio de sesión
    this.router.navigate(['/login']);
  }
}

