import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoPuntoFisicoComponent } from './evento-punto-fisico.component';

describe('EventoPuntoFisicoComponent', () => {
  let component: EventoPuntoFisicoComponent;
  let fixture: ComponentFixture<EventoPuntoFisicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventoPuntoFisicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoPuntoFisicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
