import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarDuenoBoletaComponent } from './cambiar-dueno-boleta.component';

describe('CambiarDuenoBoletaComponent', () => {
  let component: CambiarDuenoBoletaComponent;
  let fixture: ComponentFixture<CambiarDuenoBoletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambiarDuenoBoletaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarDuenoBoletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
