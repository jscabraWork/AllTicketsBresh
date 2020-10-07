import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacaComponent } from './vaca.component';

describe('VacaComponent', () => {
  let component: VacaComponent;
  let fixture: ComponentFixture<VacaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
