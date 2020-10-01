import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPuntoComponent } from './agregar-punto.component';

describe('AgregarPuntoComponent', () => {
  let component: AgregarPuntoComponent;
  let fixture: ComponentFixture<AgregarPuntoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarPuntoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPuntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
