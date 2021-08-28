import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotoresOrganizadorComponent } from './promotores-organizador.component';

describe('PromotoresOrganizadorComponent', () => {
  let component: PromotoresOrganizadorComponent;
  let fixture: ComponentFixture<PromotoresOrganizadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotoresOrganizadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotoresOrganizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
