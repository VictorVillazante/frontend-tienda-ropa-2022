import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsUserComponent } from './product-details-user.component';

describe('ProductDetailsUserComponent', () => {
  let component: ProductDetailsUserComponent;
  let fixture: ComponentFixture<ProductDetailsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
