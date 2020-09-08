import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadesAdminComponent } from './ciudades-admin.component';

describe('CiudadesAdminComponent', () => {
  let component: CiudadesAdminComponent;
  let fixture: ComponentFixture<CiudadesAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiudadesAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiudadesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
