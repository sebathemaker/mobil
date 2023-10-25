import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { supabaseKey } from './supabase.constants';

@Injectable({
    providedIn: 'root',
})
export class SupabaseService {

    private supabaseUrl = 'https://mioynnzefjjpspojuedl.susupapabase.co/rest/v1/';
    private supabaseKey = supabaseKey;

    constructor(private readonly httpClient: HttpClient) { }

    getAllAlumno() {
        return this.httpClient.get(this.supabaseUrl + 'alumno', {
            headers: new HttpHeaders({ apikey: this.supabaseKey })
        });
    }

    postAlumno() {
        return this.httpClient.post(this.supabaseUrl + 'alumno', null, {
            headers: new HttpHeaders({ apikey: this.supabaseKey })
        });
    }

    putAlumno() {
        return this.httpClient.put(this.supabaseUrl + 'alumno', null, {
            headers: new HttpHeaders({ apikey: this.supabaseKey })
        });
    }

    getAllProfesor() {
        return this.httpClient.get(this.supabaseUrl + 'profesor', {
            headers: new HttpHeaders({ apikey: this.supabaseKey })
        });
    }

    postProfesor() {
        return this.httpClient.post(this.supabaseUrl + 'profesor', null, {
            headers: new HttpHeaders({ apikey: this.supabaseKey })
        });
    }

    putProfesor() {
        return this.httpClient.put(this.supabaseUrl + 'profesor', null, {
            headers: new HttpHeaders({ apikey: this.supabaseKey })
        });
    }

    getAllAsistencia() {
        return this.httpClient.get(this.supabaseUrl + 'asistencia', {
            headers: new HttpHeaders({ apikey: this.supabaseKey })
        });
    }

    postAsistencia() {
        return this.httpClient.post(this.supabaseUrl + 'asistencia', null, {
            headers: new HttpHeaders({ apikey: this.supabaseKey })
        });
    }

    putAsistencia() {
        return this.httpClient.put(this.supabaseUrl + 'asistencia', null, {
            headers: new HttpHeaders({ apikey: this.supabaseKey })
        });
    }

    getAllAsistenciaAlumno() {
        return this.httpClient.get(this.supabaseUrl + 'asistenciaalumno', {
            headers: new HttpHeaders({ apikey: this.supabaseKey })
        });
    }

    postAsistenciaAlumno() {
        return this.httpClient.post(this.supabaseUrl + 'asistenciaalumno', null, {
            headers: new HttpHeaders({ apikey: this.supabaseKey })
        });
    }

    putAsistenciaAlumno() {
        return this.httpClient.put(this.supabaseUrl + 'asistenciaalumno', null, {
            headers: new HttpHeaders({ apikey: this.supabaseKey })
        });
    }

    getAllSeccion() {
        return this.httpClient.get(this.supabaseUrl + 'seccion', {
            headers: new HttpHeaders({ apikey: this.supabaseKey })
        });
    }

    postSeccion() {
        return this.httpClient.post(this.supabaseUrl + 'seccion', null, {
            headers: new HttpHeaders({ apikey: this.supabaseKey })
        });
    }

    putSeccion() {
        return this.httpClient.put(this.supabaseUrl + 'seccion', null, {
            headers: new HttpHeaders({ apikey: this.supabaseKey })
        });
    }

    getAllClase() {
        return this.httpClient.get(this.supabaseUrl + 'clase', {
            headers: new HttpHeaders({ apikey: this.supabaseKey })
        });
    }

    postClase() {
        return this.httpClient.post(this.supabaseUrl + 'clase', null, {
            headers: new HttpHeaders({ apikey: this.supabaseKey })
        });
    }

    putClase() {
        return this.httpClient.put(this.supabaseUrl + 'clase', null, {
            headers: new HttpHeaders({ apikey: this.supabaseKey })
        });
    }

    getAllSeccionAlumno() {
        return this.httpClient.get(this.supabaseUrl + 'seccionalumno', {
            headers: new HttpHeaders({ apikey: this.supabaseKey })
        });
    }

    postSeccionAlumno() {
        return this.httpClient.post(this.supabaseUrl + 'seccionalumno', null, {
            headers: new HttpHeaders({ apikey: this.supabaseKey })
        });
    }

    putSeccionAlumno() {
        return this.httpClient.put(this.supabaseUrl + 'seccionalumno', null, {
            headers: new HttpHeaders({ apikey: this.supabaseKey })
        });
    }
}
