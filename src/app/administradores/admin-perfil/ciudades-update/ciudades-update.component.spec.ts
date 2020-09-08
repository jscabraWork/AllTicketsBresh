import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadesUpdateComponent } from './ciudades-update.component';

describe('CiudadesUpdateComponent', () => {
  let component: CiudadesUpdateComponent;
  let fixture: ComponentFixture<CiudadesUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiudadesUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiudadesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
