import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarFechaAperturaComponent } from './agregar-fecha-apertura.component';

describe('AgregarFechaAperturaComponent', () => {
  let component: AgregarFechaAperturaComponent;
  let fixture: ComponentFixture<AgregarFechaAperturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarFechaAperturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarFechaAperturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
