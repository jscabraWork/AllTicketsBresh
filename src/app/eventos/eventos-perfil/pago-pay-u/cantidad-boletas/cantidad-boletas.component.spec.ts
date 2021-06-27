import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantidadBoletasComponent } from './cantidad-boletas.component';

describe('CantidadBoletasComponent', () => {
  let component: CantidadBoletasComponent;
  let fixture: ComponentFixture<CantidadBoletasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CantidadBoletasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CantidadBoletasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
