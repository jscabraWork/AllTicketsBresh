import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntosFisicosOrganizadorComponent } from './puntos-fisicos-organizador.component';

describe('PuntosFisicosOrganizadorComponent', () => {
  let component: PuntosFisicosOrganizadorComponent;
  let fixture: ComponentFixture<PuntosFisicosOrganizadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntosFisicosOrganizadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntosFisicosOrganizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
