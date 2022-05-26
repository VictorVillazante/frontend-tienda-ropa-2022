import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioListadoComprasComponent } from './usuario-listado-compras.component';

describe('UsuarioListadoComprasComponent', () => {
  let component: UsuarioListadoComprasComponent;
  let fixture: ComponentFixture<UsuarioListadoComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioListadoComprasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioListadoComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
