import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioDeEventosComponent } from './calendario-de-eventos.component';

describe('CalendarioDeEventosComponent', () => {
  let component: CalendarioDeEventosComponent;
  let fixture: ComponentFixture<CalendarioDeEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarioDeEventosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioDeEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
