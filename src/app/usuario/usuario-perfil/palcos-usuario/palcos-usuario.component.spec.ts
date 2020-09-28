import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalcosUsuarioComponent } from './palcos-usuario.component';

describe('PalcosUsuarioComponent', () => {
  let component: PalcosUsuarioComponent;
  let fixture: ComponentFixture<PalcosUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalcosUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalcosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
