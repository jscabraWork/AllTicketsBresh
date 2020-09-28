import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilMinisterioComponent } from './perfil-ministerio.component';

describe('PerfilMinisterioComponent', () => {
  let component: PerfilMinisterioComponent;
  let fixture: ComponentFixture<PerfilMinisterioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilMinisterioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilMinisterioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
