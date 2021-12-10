import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCoordinadorComponent } from './update-coordinador.component';

describe('UpdateCoordinadorComponent', () => {
  let component: UpdateCoordinadorComponent;
  let fixture: ComponentFixture<UpdateCoordinadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCoordinadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCoordinadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
