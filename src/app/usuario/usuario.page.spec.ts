import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuarioPage } from './usuario.page';


describe('UsuarioPage', () => {
  let component: UsuarioPage;
  let fixture: ComponentFixture<UsuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

function async(arg0: () => void): jasmine.ImplementationCallback {
  throw new Error('Function not implemented.');
}
