import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBoletasComponent } from './admin-boletas.component';

describe('AdminBoletasComponent', () => {
  let component: AdminBoletasComponent;
  let fixture: ComponentFixture<AdminBoletasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBoletasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBoletasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
