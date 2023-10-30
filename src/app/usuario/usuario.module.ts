import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsuarioPage } from './usuario.page'; 


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsuarioPage, 
      },
    ]),
  ],


})
export class UsuarioPageModule {
  router: any;

  navigateToInicio() {
    this.router.navigate(['Inicio']); // Redirige a la página 'inicio.page.html'
  }
}