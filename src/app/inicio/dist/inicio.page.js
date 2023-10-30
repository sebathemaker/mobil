"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InicioPage = void 0;
var core_1 = require("@angular/core");
var InicioPage = /** @class */ (function () {
    function InicioPage(router, supabaseService) {
        this.router = router;
        this.supabaseService = supabaseService;
        this.username = '';
        this.currentUser = null;
    }
    InicioPage.prototype.ngOnInit = function () {
        this.obtenerDatosUsuario(1);
    };
    InicioPage.prototype.obtenerDatosUsuario = function (userId) {
        var _this = this;
        this.supabaseService.getUsuarioActual(userId).then(function (usuario) {
            _this.currentUser = usuario;
            _this.username = usuario.name;
            if (usuario.tipo === 'alumno') {
                _this.obtenerDatosAlumno(usuario.id);
            }
            else if (usuario.tipo === 'profesor') {
                _this.obtenerDatosProfesor(usuario.id);
            }
        }, function (error) {
            console.error('Error al obtener datos del usuario', error);
        });
    };
    InicioPage.prototype.obtenerDatosAlumno = function (alumnoId) {
        this.supabaseService.getAllAlumno().subscribe(function (alumnos) {
            var alumno = alumnos.find(function (a) { return a.id === alumnoId; });
            if (alumno) {
                console.log('Datos del alumno:', alumno);
            }
        }, function (error) {
            console.error('Error al obtener datos del alumno', error);
        });
    };
    InicioPage.prototype.obtenerDatosProfesor = function (profesorId) {
        this.supabaseService.getAllProfesor().subscribe(function (profesores) {
            var profesor = profesores.find(function (p) { return p.id === profesorId; });
            if (profesor) {
                console.log('Datos del profesor:', profesor);
            }
        }, function (error) {
            console.error('Error al obtener datos del profesor', error);
        });
    };
    InicioPage.prototype.navigateToOption = function (option) {
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
    };
    InicioPage.prototype.logout = function () {
        this.currentUser = null;
        this.router.navigate(['/login']);
    };
    InicioPage = __decorate([
        core_1.Component({
            selector: 'app-inicio',
            templateUrl: './inicio.page.html',
            styleUrls: ['./inicio.page.scss']
        })
    ], InicioPage);
    return InicioPage;
}());
exports.InicioPage = InicioPage;
