import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMinisterioComponent } from './update-ministerio.component';

describe('UpdateMinisterioComponent', () => {
  let component: UpdateMinisterioComponent;
  let fixture: ComponentFixture<UpdateMinisterioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMinisterioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMinisterioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
