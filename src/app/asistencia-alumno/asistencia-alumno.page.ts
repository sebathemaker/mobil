import { Component } from '@angular/core';
import { SupabaseService } from '../servicio/supabaseservice';


@Component({
  selector: 'app-asistencia-alumno',
  templateUrl: './asistencia-alumno.page.html',
  styleUrls: ['./asistencia-alumno.page.scss'],
})
export class AsistenciaAlumnoPage {
  alumnos: any[] = [];
  seccion: any;
  profesor: any;
  clase: any;

  constructor(private supabaseService: SupabaseService) { }

  marcarAsistenciaAlumno(alumnoId: number, presente: boolean) {
    this.supabaseService.putAsistenciaalumno(alumnoId, presente).subscribe(
      (response: any) => {
        if (response) {
          console.log('Asistencia actualizada exitosamente');
          this.actualizarListaDeAlumnos();
        }
      },
      (error: any) => {
        console.error('Error al actualizar la asistencia', error);
      }
    );
  }

  actualizarListaDeAlumnos() {
    this.supabaseService.getAllAlumno().subscribe((value: Object): void => {
      const alumnos = value as any[];
    },
      (error: any) => {
        console.error('Error al obtener la lista de alumnos', error);
      },
      () => {
        console.info('Fin de carga de alumnos');
      }
    );
  }

}
