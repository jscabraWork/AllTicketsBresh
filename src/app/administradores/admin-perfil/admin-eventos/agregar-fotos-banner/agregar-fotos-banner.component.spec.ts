import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarFotosBannerComponent } from './agregar-fotos-banner.component';

describe('AgregarFotosBannerComponent', () => {
  let component: AgregarFotosBannerComponent;
  let fixture: ComponentFixture<AgregarFotosBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarFotosBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarFotosBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
