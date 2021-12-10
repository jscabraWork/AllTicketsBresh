import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCoordinadoresComponent } from './admin-coordinadores.component';

describe('AdminCoordinadoresComponent', () => {
  let component: AdminCoordinadoresComponent;
  let fixture: ComponentFixture<AdminCoordinadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCoordinadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCoordinadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
