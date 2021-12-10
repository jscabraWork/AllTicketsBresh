import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCoordinadorComponent } from './agregar-coordinador.component';

describe('AgregarCoordinadorComponent', () => {
  let component: AgregarCoordinadorComponent;
  let fixture: ComponentFixture<AgregarCoordinadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarCoordinadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarCoordinadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
