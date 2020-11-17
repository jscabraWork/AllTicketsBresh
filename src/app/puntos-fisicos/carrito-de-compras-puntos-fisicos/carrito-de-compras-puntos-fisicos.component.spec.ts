import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoDeComprasPuntosFisicosComponent } from './carrito-de-compras-puntos-fisicos.component';

describe('CarritoDeComprasPuntosFisicosComponent', () => {
  let component: CarritoDeComprasPuntosFisicosComponent;
  let fixture: ComponentFixture<CarritoDeComprasPuntosFisicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoDeComprasPuntosFisicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoDeComprasPuntosFisicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
