import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminosAvalComponent } from './terminos-aval.component';

describe('TerminosAvalComponent', () => {
  let component: TerminosAvalComponent;
  let fixture: ComponentFixture<TerminosAvalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminosAvalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminosAvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
