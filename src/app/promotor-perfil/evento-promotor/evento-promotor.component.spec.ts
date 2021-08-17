import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoPromotorComponent } from './evento-promotor.component';

describe('EventoPromotorComponent', () => {
  let component: EventoPromotorComponent;
  let fixture: ComponentFixture<EventoPromotorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventoPromotorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoPromotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
