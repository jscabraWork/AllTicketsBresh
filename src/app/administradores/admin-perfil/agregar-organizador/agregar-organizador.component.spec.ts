import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarOrganizadorComponent } from './agregar-organizador.component';

describe('AgregarOrganizadorComponent', () => {
  let component: AgregarOrganizadorComponent;
  let fixture: ComponentFixture<AgregarOrganizadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarOrganizadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarOrganizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
