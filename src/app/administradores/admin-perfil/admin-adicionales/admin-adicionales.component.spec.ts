import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdicionalesComponent } from './admin-adicionales.component';

describe('AdminAdicionalesComponent', () => {
  let component: AdminAdicionalesComponent;
  let fixture: ComponentFixture<AdminAdicionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAdicionalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAdicionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
