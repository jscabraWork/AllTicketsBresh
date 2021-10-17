import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAlternosPalcosComponent } from './agregar-alternos-palcos.component';

describe('AgregarAlternosPalcosComponent', () => {
  let component: AgregarAlternosPalcosComponent;
  let fixture: ComponentFixture<AgregarAlternosPalcosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarAlternosPalcosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarAlternosPalcosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
