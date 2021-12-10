import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinadorPerfilComponent } from './coordinador-perfil.component';

describe('CoordinadorPerfilComponent', () => {
  let component: CoordinadorPerfilComponent;
  let fixture: ComponentFixture<CoordinadorPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinadorPerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinadorPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
