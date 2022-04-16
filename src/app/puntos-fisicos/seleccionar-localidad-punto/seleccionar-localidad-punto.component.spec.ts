import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionarLocalidadPuntoComponent } from './seleccionar-localidad-punto.component';

describe('SeleccionarLocalidadPuntoComponent', () => {
  let component: SeleccionarLocalidadPuntoComponent;
  let fixture: ComponentFixture<SeleccionarLocalidadPuntoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionarLocalidadPuntoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionarLocalidadPuntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
