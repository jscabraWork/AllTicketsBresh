import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarFotoPerfilComponent } from './agregar-foto-perfil.component';

describe('AgregarFotoPerfilComponent', () => {
  let component: AgregarFotoPerfilComponent;
  let fixture: ComponentFixture<AgregarFotoPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarFotoPerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarFotoPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
