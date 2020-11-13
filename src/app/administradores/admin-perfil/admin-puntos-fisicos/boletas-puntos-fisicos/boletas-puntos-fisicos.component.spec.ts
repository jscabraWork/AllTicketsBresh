import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletasPuntosFisicosComponent } from './boletas-puntos-fisicos.component';

describe('BoletasPuntosFisicosComponent', () => {
  let component: BoletasPuntosFisicosComponent;
  let fixture: ComponentFixture<BoletasPuntosFisicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoletasPuntosFisicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoletasPuntosFisicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
