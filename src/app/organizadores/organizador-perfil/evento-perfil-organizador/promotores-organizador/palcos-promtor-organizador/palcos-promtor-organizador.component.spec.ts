import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalcosPromtorOrganizadorComponent } from './palcos-promtor-organizador.component';

describe('PalcosPromtorOrganizadorComponent', () => {
  let component: PalcosPromtorOrganizadorComponent;
  let fixture: ComponentFixture<PalcosPromtorOrganizadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalcosPromtorOrganizadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalcosPromtorOrganizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
