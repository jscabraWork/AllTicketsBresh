import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMinisterioComponent } from './admin-ministerio.component';

describe('AdminMinisterioComponent', () => {
  let component: AdminMinisterioComponent;
  let fixture: ComponentFixture<AdminMinisterioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMinisterioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMinisterioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
