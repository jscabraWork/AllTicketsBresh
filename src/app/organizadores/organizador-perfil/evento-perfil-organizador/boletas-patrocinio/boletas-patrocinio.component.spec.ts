import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletasPatrocinioComponent } from './boletas-patrocinio.component';

describe('BoletasPatrocinioComponent', () => {
  let component: BoletasPatrocinioComponent;
  let fixture: ComponentFixture<BoletasPatrocinioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoletasPatrocinioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoletasPatrocinioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
