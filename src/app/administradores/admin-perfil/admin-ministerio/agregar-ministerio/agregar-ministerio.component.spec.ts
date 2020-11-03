import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarMinisterioComponent } from './agregar-ministerio.component';

describe('AgregarMinisterioComponent', () => {
  let component: AgregarMinisterioComponent;
  let fixture: ComponentFixture<AgregarMinisterioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarMinisterioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarMinisterioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
