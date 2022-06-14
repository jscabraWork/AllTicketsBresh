import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarBoletasComponent } from './reservar-boletas.component';

describe('ReservarBoletasComponent', () => {
  let component: ReservarBoletasComponent;
  let fixture: ComponentFixture<ReservarBoletasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservarBoletasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservarBoletasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
