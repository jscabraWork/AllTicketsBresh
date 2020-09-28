import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotorPerfilComponent } from './promotor-perfil.component';

describe('PromotorPerfilComponent', () => {
  let component: PromotorPerfilComponent;
  let fixture: ComponentFixture<PromotorPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotorPerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotorPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
