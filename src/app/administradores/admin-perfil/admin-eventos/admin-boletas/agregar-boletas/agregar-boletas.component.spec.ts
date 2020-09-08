import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarBoletasComponent } from './agregar-boletas.component';

describe('AgregarBoletasComponent', () => {
  let component: AgregarBoletasComponent;
  let fixture: ComponentFixture<AgregarBoletasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarBoletasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarBoletasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
