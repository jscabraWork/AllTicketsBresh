import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEtapasComponent } from './admin-etapas.component';

describe('AdminEtapasComponent', () => {
  let component: AdminEtapasComponent;
  let fixture: ComponentFixture<AdminEtapasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEtapasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEtapasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
