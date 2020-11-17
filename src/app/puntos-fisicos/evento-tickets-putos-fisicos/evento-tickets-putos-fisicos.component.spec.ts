import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoTicketsPutosFisicosComponent } from './evento-tickets-putos-fisicos.component';

describe('EventoTicketsPutosFisicosComponent', () => {
  let component: EventoTicketsPutosFisicosComponent;
  let fixture: ComponentFixture<EventoTicketsPutosFisicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventoTicketsPutosFisicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoTicketsPutosFisicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
