import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLectorComponent } from './admin-lector.component';

describe('AdminLectorComponent', () => {
  let component: AdminLectorComponent;
  let fixture: ComponentFixture<AdminLectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
