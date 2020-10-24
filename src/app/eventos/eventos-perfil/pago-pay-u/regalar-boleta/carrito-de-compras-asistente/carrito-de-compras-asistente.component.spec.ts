import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoDeComprasAsistenteComponent } from './carrito-de-compras-asistente.component';

describe('CarritoDeComprasAsistenteComponent', () => {
  let component: CarritoDeComprasAsistenteComponent;
  let fixture: ComponentFixture<CarritoDeComprasAsistenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoDeComprasAsistenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoDeComprasAsistenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
