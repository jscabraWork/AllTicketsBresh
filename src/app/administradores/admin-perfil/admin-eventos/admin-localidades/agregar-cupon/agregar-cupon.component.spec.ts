import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCuponComponent } from './agregar-cupon.component';

describe('AgregarCuponComponent', () => {
  let component: AgregarCuponComponent;
  let fixture: ComponentFixture<AgregarCuponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarCuponComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarCuponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
