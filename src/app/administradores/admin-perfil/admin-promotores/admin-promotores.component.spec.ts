import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPromotoresComponent } from './admin-promotores.component';

describe('AdminPromotoresComponent', () => {
  let component: AdminPromotoresComponent;
  let fixture: ComponentFixture<AdminPromotoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPromotoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPromotoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
