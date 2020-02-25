import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoAdminComponent } from './perso-admin.component';

describe('PersoAdminComponent', () => {
  let component: PersoAdminComponent;
  let fixture: ComponentFixture<PersoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
