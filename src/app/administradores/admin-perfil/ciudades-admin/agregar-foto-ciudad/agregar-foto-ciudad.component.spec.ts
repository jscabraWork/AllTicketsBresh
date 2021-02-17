import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarFotoCiudadComponent } from './agregar-foto-ciudad.component';

describe('AgregarFotoCiudadComponent', () => {
  let component: AgregarFotoCiudadComponent;
  let fixture: ComponentFixture<AgregarFotoCiudadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarFotoCiudadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarFotoCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
