import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePromotorComponent } from './update-promotor.component';

describe('UpdatePromotorComponent', () => {
  let component: UpdatePromotorComponent;
  let fixture: ComponentFixture<UpdatePromotorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePromotorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePromotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
