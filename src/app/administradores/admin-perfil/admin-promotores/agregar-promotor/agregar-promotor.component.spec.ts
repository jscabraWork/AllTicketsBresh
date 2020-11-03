import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPromotorComponent } from './agregar-promotor.component';

describe('AgregarPromotorComponent', () => {
  let component: AgregarPromotorComponent;
  let fixture: ComponentFixture<AgregarPromotorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarPromotorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPromotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
