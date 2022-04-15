import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationMenuUserComponent } from './navigation-menu-user.component';

describe('NavigationMenuUserComponent', () => {
  let component: NavigationMenuUserComponent;
  let fixture: ComponentFixture<NavigationMenuUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationMenuUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationMenuUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
