import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOrganizadorComponent } from './update-organizador.component';

describe('UpdateOrganizadorComponent', () => {
  let component: UpdateOrganizadorComponent;
  let fixture: ComponentFixture<UpdateOrganizadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateOrganizadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOrganizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
