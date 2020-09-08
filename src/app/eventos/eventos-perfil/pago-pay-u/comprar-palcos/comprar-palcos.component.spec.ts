import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarPalcosComponent } from './comprar-palcos.component';

describe('ComprarPalcosComponent', () => {
  let component: ComprarPalcosComponent;
  let fixture: ComponentFixture<ComprarPalcosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprarPalcosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprarPalcosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
