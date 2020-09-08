import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLocalidadComponent } from './update-localidad.component';

describe('UpdateLocalidadComponent', () => {
  let component: UpdateLocalidadComponent;
  let fixture: ComponentFixture<UpdateLocalidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateLocalidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLocalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
