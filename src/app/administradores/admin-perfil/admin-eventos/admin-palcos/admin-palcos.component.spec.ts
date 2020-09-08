import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPalcosComponent } from './admin-palcos.component';

describe('AdminPalcosComponent', () => {
  let component: AdminPalcosComponent;
  let fixture: ComponentFixture<AdminPalcosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPalcosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPalcosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
