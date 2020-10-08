import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAmigosComponent } from './agregar-amigos.component';

describe('AgregarAmigosComponent', () => {
  let component: AgregarAmigosComponent;
  let fixture: ComponentFixture<AgregarAmigosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarAmigosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarAmigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
