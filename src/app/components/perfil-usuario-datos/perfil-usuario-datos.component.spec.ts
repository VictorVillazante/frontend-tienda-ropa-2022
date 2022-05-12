import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilUsuarioDatosComponent } from './perfil-usuario-datos.component';

describe('PerfilUsuarioDatosComponent', () => {
  let component: PerfilUsuarioDatosComponent;
  let fixture: ComponentFixture<PerfilUsuarioDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilUsuarioDatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilUsuarioDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
