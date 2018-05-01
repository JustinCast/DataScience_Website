import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyInvestigationComponent } from './modify-investigation.component';

describe('ModifyInvestigationComponent', () => {
  let component: ModifyInvestigationComponent;
  let fixture: ComponentFixture<ModifyInvestigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyInvestigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyInvestigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
