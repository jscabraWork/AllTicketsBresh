import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizadorPerfilComponent } from './organizador-perfil.component';

describe('OrganizadorPerfilComponent', () => {
  let component: OrganizadorPerfilComponent;
  let fixture: ComponentFixture<OrganizadorPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizadorPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizadorPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
