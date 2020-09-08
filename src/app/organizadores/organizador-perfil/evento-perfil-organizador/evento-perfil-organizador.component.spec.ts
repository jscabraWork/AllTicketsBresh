import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoPerfilOrganizadorComponent } from './evento-perfil-organizador.component';

describe('EventoPerfilOrganizadorComponent', () => {
  let component: EventoPerfilOrganizadorComponent;
  let fixture: ComponentFixture<EventoPerfilOrganizadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoPerfilOrganizadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoPerfilOrganizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
