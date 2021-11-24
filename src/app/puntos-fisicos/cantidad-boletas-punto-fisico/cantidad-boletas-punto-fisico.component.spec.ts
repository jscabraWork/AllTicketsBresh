import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantidadBoletasPuntoFisicoComponent } from './cantidad-boletas-punto-fisico.component';

describe('CantidadBoletasPuntoFisicoComponent', () => {
  let component: CantidadBoletasPuntoFisicoComponent;
  let fixture: ComponentFixture<CantidadBoletasPuntoFisicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CantidadBoletasPuntoFisicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CantidadBoletasPuntoFisicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
