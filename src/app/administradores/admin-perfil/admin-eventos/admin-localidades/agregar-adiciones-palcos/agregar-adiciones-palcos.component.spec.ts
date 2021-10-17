import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAdicionesPalcosComponent } from './agregar-adiciones-palcos.component';

describe('AgregarAdicionesPalcosComponent', () => {
  let component: AgregarAdicionesPalcosComponent;
  let fixture: ComponentFixture<AgregarAdicionesPalcosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarAdicionesPalcosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarAdicionesPalcosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
