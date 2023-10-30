"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var usuario_page_1 = require("./usuario.page");
describe('UsuarioPage', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        fixture = testing_1.TestBed.createComponent(usuario_page_1.UsuarioPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
function async(arg0) {
    throw new Error('Function not implemented.');
}
