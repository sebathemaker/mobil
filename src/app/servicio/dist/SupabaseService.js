"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SupabaseService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var supabase_constants_1 = require("./supabase.constants");
var SupabaseService = /** @class */ (function () {
    function SupabaseService(httpClient) {
        this.httpClient = httpClient;
        this.supabaseUrl = 'https://mioynnzefjjpspojuedl.susupapabase.co/rest/v1/';
        this.supabaseKey = supabase_constants_1.supabaseKey;
    }
    SupabaseService.prototype.getAllAlumno = function () {
        return this.httpClient.get(this.supabaseUrl + 'alumno', {
            headers: new http_1.HttpHeaders({ apikey: this.supabaseKey })
        });
    };
    SupabaseService.prototype.postAlumno = function () {
        return this.httpClient.post(this.supabaseUrl + 'alumno', null, {
            headers: new http_1.HttpHeaders({ apikey: this.supabaseKey })
        });
    };
    SupabaseService.prototype.putAlumno = function () {
        return this.httpClient.put(this.supabaseUrl + 'alumno', null, {
            headers: new http_1.HttpHeaders({ apikey: this.supabaseKey })
        });
    };
    SupabaseService.prototype.getAllProfesor = function () {
        return this.httpClient.get(this.supabaseUrl + 'profesor', {
            headers: new http_1.HttpHeaders({ apikey: this.supabaseKey })
        });
    };
    SupabaseService.prototype.postProfesor = function () {
        return this.httpClient.post(this.supabaseUrl + 'profesor', null, {
            headers: new http_1.HttpHeaders({ apikey: this.supabaseKey })
        });
    };
    SupabaseService.prototype.putProfesor = function () {
        return this.httpClient.put(this.supabaseUrl + 'profesor', null, {
            headers: new http_1.HttpHeaders({ apikey: this.supabaseKey })
        });
    };
    SupabaseService.prototype.getAllAsistencia = function () {
        return this.httpClient.get(this.supabaseUrl + 'asistencia', {
            headers: new http_1.HttpHeaders({ apikey: this.supabaseKey })
        });
    };
    SupabaseService.prototype.postAsistencia = function () {
        return this.httpClient.post(this.supabaseUrl + 'asistencia', null, {
            headers: new http_1.HttpHeaders({ apikey: this.supabaseKey })
        });
    };
    SupabaseService.prototype.putAsistencia = function () {
        return this.httpClient.put(this.supabaseUrl + 'asistencia', null, {
            headers: new http_1.HttpHeaders({ apikey: this.supabaseKey })
        });
    };
    SupabaseService.prototype.getAllAsistenciaAlumno = function () {
        return this.httpClient.get(this.supabaseUrl + 'asistenciaalumno', {
            headers: new http_1.HttpHeaders({ apikey: this.supabaseKey })
        });
    };
    SupabaseService.prototype.postAsistenciaAlumno = function () {
        return this.httpClient.post(this.supabaseUrl + 'asistenciaalumno', null, {
            headers: new http_1.HttpHeaders({ apikey: this.supabaseKey })
        });
    };
    SupabaseService.prototype.putAsistenciaAlumno = function () {
        return this.httpClient.put(this.supabaseUrl + 'asistenciaalumno', null, {
            headers: new http_1.HttpHeaders({ apikey: this.supabaseKey })
        });
    };
    SupabaseService.prototype.getAllSeccion = function () {
        return this.httpClient.get(this.supabaseUrl + 'seccion', {
            headers: new http_1.HttpHeaders({ apikey: this.supabaseKey })
        });
    };
    SupabaseService.prototype.postSeccion = function () {
        return this.httpClient.post(this.supabaseUrl + 'seccion', null, {
            headers: new http_1.HttpHeaders({ apikey: this.supabaseKey })
        });
    };
    SupabaseService.prototype.putSeccion = function () {
        return this.httpClient.put(this.supabaseUrl + 'seccion', null, {
            headers: new http_1.HttpHeaders({ apikey: this.supabaseKey })
        });
    };
    SupabaseService.prototype.getAllClase = function () {
        return this.httpClient.get(this.supabaseUrl + 'clase', {
            headers: new http_1.HttpHeaders({ apikey: this.supabaseKey })
        });
    };
    SupabaseService.prototype.postClase = function () {
        return this.httpClient.post(this.supabaseUrl + 'clase', null, {
            headers: new http_1.HttpHeaders({ apikey: this.supabaseKey })
        });
    };
    SupabaseService.prototype.putClase = function () {
        return this.httpClient.put(this.supabaseUrl + 'clase', null, {
            headers: new http_1.HttpHeaders({ apikey: this.supabaseKey })
        });
    };
    SupabaseService.prototype.getAllSeccionAlumno = function () {
        return this.httpClient.get(this.supabaseUrl + 'seccionalumno', {
            headers: new http_1.HttpHeaders({ apikey: this.supabaseKey })
        });
    };
    SupabaseService.prototype.postSeccionAlumno = function () {
        return this.httpClient.post(this.supabaseUrl + 'seccionalumno', null, {
            headers: new http_1.HttpHeaders({ apikey: this.supabaseKey })
        });
    };
    SupabaseService.prototype.putSeccionAlumno = function () {
        return this.httpClient.put(this.supabaseUrl + 'seccionalumno', null, {
            headers: new http_1.HttpHeaders({ apikey: this.supabaseKey })
        });
    };
    SupabaseService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], SupabaseService);
    return SupabaseService;
}());
exports.SupabaseService = SupabaseService;
