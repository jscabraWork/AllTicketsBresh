import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegalarBoletaComponent } from './regalar-boleta.component';

describe('RegalarBoletaComponent', () => {
  let component: RegalarBoletaComponent;
  let fixture: ComponentFixture<RegalarBoletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegalarBoletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegalarBoletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
