import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePuntoFisicoComponent } from './detalle-punto-fisico.component';

describe('DetallePuntoFisicoComponent', () => {
  let component: DetallePuntoFisicoComponent;
  let fixture: ComponentFixture<DetallePuntoFisicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallePuntoFisicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePuntoFisicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
