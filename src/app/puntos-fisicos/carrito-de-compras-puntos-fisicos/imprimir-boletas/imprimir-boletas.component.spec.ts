import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimirBoletasComponent } from './imprimir-boletas.component';

describe('ImprimirBoletasComponent', () => {
  let component: ImprimirBoletasComponent;
  let fixture: ComponentFixture<ImprimirBoletasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImprimirBoletasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimirBoletasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
