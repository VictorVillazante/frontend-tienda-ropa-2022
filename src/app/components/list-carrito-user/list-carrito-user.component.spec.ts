import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCarritoUserComponent } from './list-carrito-user.component';

describe('ListCarritoUserComponent', () => {
  let component: ListCarritoUserComponent;
  let fixture: ComponentFixture<ListCarritoUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCarritoUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCarritoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
