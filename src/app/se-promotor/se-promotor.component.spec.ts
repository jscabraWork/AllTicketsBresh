import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SePromotorComponent } from './se-promotor.component';

describe('SePromotorComponent', () => {
  let component: SePromotorComponent;
  let fixture: ComponentFixture<SePromotorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SePromotorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SePromotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
