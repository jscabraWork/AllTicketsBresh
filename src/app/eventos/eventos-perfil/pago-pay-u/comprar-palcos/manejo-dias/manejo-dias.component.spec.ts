import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManejoDiasComponent } from './manejo-dias.component';

describe('ManejoDiasComponent', () => {
  let component: ManejoDiasComponent;
  let fixture: ComponentFixture<ManejoDiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManejoDiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManejoDiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
