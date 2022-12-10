import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemainProductComponent } from './remain-product.component';

describe('RemainProductComponent', () => {
  let component: RemainProductComponent;
  let fixture: ComponentFixture<RemainProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemainProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemainProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
