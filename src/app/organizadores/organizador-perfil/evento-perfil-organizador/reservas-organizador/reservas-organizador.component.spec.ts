import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasOrganizadorComponent } from './reservas-organizador.component';

describe('ReservasOrganizadorComponent', () => {
  let component: ReservasOrganizadorComponent;
  let fixture: ComponentFixture<ReservasOrganizadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservasOrganizadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservasOrganizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
