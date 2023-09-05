import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../models/UserModel'; // Importa UserModel si es necesario

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  username: string = '';
  currentUser: UserModel | null = null;

  listUser: UserModel[] = [
    new UserModel('Pedro','Gomez','pgomez@gmail.com',undefined,'USUARIO','pgomez','pedro123'),
    new UserModel('Juan','Pablo','jpablo@gmail.com',undefined,'ADMIN','jpablo','jpablo123'),
    new UserModel('Carlos','mancilla','cmancilla@gmail.com',undefined,'USUARIO','cmancilla','camall123'),
    new UserModel('Esperanza','Alvarez','eAlvarez@gmail.com',undefined,'ADMIN','ealvarez','ealva123')
  ];


  constructor(private router: Router) {}

  ngOnInit() {
    const foundUser = this.listUser.find((user) => user.username === this.username);
    this.currentUser = foundUser || null;
  }

  navigateToOption(option: string) {
    
    switch (option) {
      case 'Opción 1':
        this.router.navigate(['/opcion1']);
        break;
      case 'Opción 2':
        this.router.navigate(['/opcion2']);
        break;
      default:
        break;
    }
  }

  logout() {
    
    this.currentUser = null;
    this.router.navigate(['/login']);
  }
}

