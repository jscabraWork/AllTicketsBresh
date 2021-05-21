import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAgregarEventosPromotorComponent } from './admin-agregar-eventos-promotor.component';

describe('AdminAgregarEventosPromotorComponent', () => {
  let component: AdminAgregarEventosPromotorComponent;
  let fixture: ComponentFixture<AdminAgregarEventosPromotorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAgregarEventosPromotorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAgregarEventosPromotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
