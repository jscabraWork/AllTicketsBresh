import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarFotoMapaComponent } from './agregar-foto-mapa.component';

describe('AgregarFotoMapaComponent', () => {
  let component: AgregarFotoMapaComponent;
  let fixture: ComponentFixture<AgregarFotoMapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarFotoMapaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarFotoMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
