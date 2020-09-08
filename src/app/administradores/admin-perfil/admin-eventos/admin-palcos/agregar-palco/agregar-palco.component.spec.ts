import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPalcoComponent } from './agregar-palco.component';

describe('AgregarPalcoComponent', () => {
  let component: AgregarPalcoComponent;
  let fixture: ComponentFixture<AgregarPalcoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarPalcoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPalcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
