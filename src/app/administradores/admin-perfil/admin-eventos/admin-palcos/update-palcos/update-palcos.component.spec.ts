import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePalcosComponent } from './update-palcos.component';

describe('UpdatePalcosComponent', () => {
  let component: UpdatePalcosComponent;
  let fixture: ComponentFixture<UpdatePalcosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePalcosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePalcosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
