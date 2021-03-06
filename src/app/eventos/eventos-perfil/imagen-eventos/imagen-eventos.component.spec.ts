import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenEventosComponent } from './imagen-eventos.component';

describe('ImagenEventosComponent', () => {
  let component: ImagenEventosComponent;
  let fixture: ComponentFixture<ImagenEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenEventosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
