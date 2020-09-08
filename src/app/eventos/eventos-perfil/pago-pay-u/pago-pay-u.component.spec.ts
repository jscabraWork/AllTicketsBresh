import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoPayUComponent } from './pago-pay-u.component';

describe('PagoPayUComponent', () => {
  let component: PagoPayUComponent;
  let fixture: ComponentFixture<PagoPayUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoPayUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoPayUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
