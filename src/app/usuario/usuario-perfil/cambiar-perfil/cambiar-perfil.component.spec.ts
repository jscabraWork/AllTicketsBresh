import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarPerfilComponent } from './cambiar-perfil.component';

describe('CambiarPerfilComponent', () => {
  let component: CambiarPerfilComponent;
  let fixture: ComponentFixture<CambiarPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambiarPerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
