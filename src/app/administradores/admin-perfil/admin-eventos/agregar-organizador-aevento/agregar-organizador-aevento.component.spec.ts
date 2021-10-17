import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarOrganizadorAEventoComponent } from './agregar-organizador-aevento.component';

describe('AgregarOrganizadorAEventoComponent', () => {
  let component: AgregarOrganizadorAEventoComponent;
  let fixture: ComponentFixture<AgregarOrganizadorAEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarOrganizadorAEventoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarOrganizadorAEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
