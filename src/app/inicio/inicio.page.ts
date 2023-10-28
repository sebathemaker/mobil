import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseService } from '../servicio/supabaseservice';
import { UserModel } from '../models/UserModel';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  username: string = '';
  currentUser: UserModel | null = null;

  constructor(private router: Router, private supabaseService: SupabaseService) {}

  ngOnInit() {
    this.obtenerDatosUsuario(1);
  }

  obtenerDatosUsuario(userId: number) {
    this.supabaseService.getUsuarioActual(userId).then(
      (usuario: any) => {
        this.currentUser = usuario;
        this.username = usuario.name;
  
        if (usuario.tipo === 'alumno') {
          this.obtenerDatosAlumno(usuario.id);
        } else if (usuario.tipo === 'profesor') {
          this.obtenerDatosProfesor(usuario.id);
        }
      },
      (error: any) => {
        console.error('Error al obtener datos del usuario', error);
      }
    );
  }

  obtenerDatosAlumno(alumnoId: number) {
    this.supabaseService.getAllAlumno().subscribe(
      (alumnos: any) => {
        const alumno = alumnos.find((a: any) => a.id === alumnoId);
        if (alumno) {
          console.log('Datos del alumno:', alumno);
        }
      },
      (error: any) => {
        console.error('Error al obtener datos del alumno', error);
      }
    );
  }

  obtenerDatosProfesor(profesorId: number) {
    this.supabaseService.getAllProfesor().subscribe(
      (profesores: any) => {
        const profesor = profesores.find((p: any) => p.id === profesorId);
        if (profesor) {
          console.log('Datos del profesor:', profesor);
        }
      },
      (error: any) => {
        console.error('Error al obtener datos del profesor', error);
      }
    );
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
