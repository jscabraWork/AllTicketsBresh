import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalidadSeleccionComponent } from './localidad-seleccion.component';

describe('LocalidadSeleccionComponent', () => {
  let component: LocalidadSeleccionComponent;
  let fixture: ComponentFixture<LocalidadSeleccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalidadSeleccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalidadSeleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
