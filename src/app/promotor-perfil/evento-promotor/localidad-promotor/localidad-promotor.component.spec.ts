import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalidadPromotorComponent } from './localidad-promotor.component';

describe('LocalidadPromotorComponent', () => {
  let component: LocalidadPromotorComponent;
  let fixture: ComponentFixture<LocalidadPromotorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalidadPromotorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalidadPromotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
