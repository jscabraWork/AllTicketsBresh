import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoPalcosPuntosFisicosComponent } from './evento-palcos-puntos-fisicos.component';

describe('EventoPalcosPuntosFisicosComponent', () => {
  let component: EventoPalcosPuntosFisicosComponent;
  let fixture: ComponentFixture<EventoPalcosPuntosFisicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventoPalcosPuntosFisicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoPalcosPuntosFisicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
