import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosPerfilComponent } from './eventos-perfil.component';

describe('EventosPerfilComponent', () => {
  let component: EventosPerfilComponent;
  let fixture: ComponentFixture<EventosPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
