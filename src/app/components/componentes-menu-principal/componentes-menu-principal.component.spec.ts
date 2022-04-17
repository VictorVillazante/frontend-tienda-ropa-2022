import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesMenuPrincipalComponent } from './componentes-menu-principal.component';

describe('ComponentesMenuPrincipalComponent', () => {
  let component: ComponentesMenuPrincipalComponent;
  let fixture: ComponentFixture<ComponentesMenuPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentesMenuPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentesMenuPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
