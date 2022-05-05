import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCategoriesUserComponent } from './list-categories-user.component';

describe('ListCategoriesUserComponent', () => {
  let component: ListCategoriesUserComponent;
  let fixture: ComponentFixture<ListCategoriesUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCategoriesUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCategoriesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
