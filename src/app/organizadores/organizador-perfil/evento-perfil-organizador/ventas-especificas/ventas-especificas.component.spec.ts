import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasEspecificasComponent } from './ventas-especificas.component';

describe('VentasEspecificasComponent', () => {
  let component: VentasEspecificasComponent;
  let fixture: ComponentFixture<VentasEspecificasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentasEspecificasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasEspecificasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
