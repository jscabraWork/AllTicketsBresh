import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoMinisterioComponent } from './evento-ministerio.component';

describe('EventoMinisterioComponent', () => {
  let component: EventoMinisterioComponent;
  let fixture: ComponentFixture<EventoMinisterioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventoMinisterioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoMinisterioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
