import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManejoDiasPuntoComponent } from './manejo-dias-punto.component';

describe('ManejoDiasPuntoComponent', () => {
  let component: ManejoDiasPuntoComponent;
  let fixture: ComponentFixture<ManejoDiasPuntoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManejoDiasPuntoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManejoDiasPuntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
