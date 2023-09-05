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
export class UsuarioPageModule {}