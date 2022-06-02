import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoAvalComponent } from './grupo-aval.component';

describe('GrupoAvalComponent', () => {
  let component: GrupoAvalComponent;
  let fixture: ComponentFixture<GrupoAvalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupoAvalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoAvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
