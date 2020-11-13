import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletasPromotorComponent } from './boletas-promotor.component';

describe('BoletasPromotorComponent', () => {
  let component: BoletasPromotorComponent;
  let fixture: ComponentFixture<BoletasPromotorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoletasPromotorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoletasPromotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
