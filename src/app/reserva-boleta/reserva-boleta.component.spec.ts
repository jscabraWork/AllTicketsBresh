import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaBoletaComponent } from './reserva-boleta.component';

describe('ReservaBoletaComponent', () => {
  let component: ReservaBoletaComponent;
  let fixture: ComponentFixture<ReservaBoletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaBoletaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaBoletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
