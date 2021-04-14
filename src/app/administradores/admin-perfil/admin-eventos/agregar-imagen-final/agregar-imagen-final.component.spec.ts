import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarImagenFinalComponent } from './agregar-imagen-final.component';

describe('AgregarImagenFinalComponent', () => {
  let component: AgregarImagenFinalComponent;
  let fixture: ComponentFixture<AgregarImagenFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarImagenFinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarImagenFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
