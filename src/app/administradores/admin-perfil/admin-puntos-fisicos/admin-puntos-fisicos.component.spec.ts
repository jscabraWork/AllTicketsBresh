import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPuntosFisicosComponent } from './admin-puntos-fisicos.component';

describe('AdminPuntosFisicosComponent', () => {
  let component: AdminPuntosFisicosComponent;
  let fixture: ComponentFixture<AdminPuntosFisicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPuntosFisicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPuntosFisicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
