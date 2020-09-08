import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadesEventosComponent } from './ciudades-eventos.component';

describe('CiudadesEventosComponent', () => {
  let component: CiudadesEventosComponent;
  let fixture: ComponentFixture<CiudadesEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiudadesEventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiudadesEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
