import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyProposalComponent } from './modify-proposal.component';

describe('ModifyProposalComponent', () => {
  let component: ModifyProposalComponent;
  let fixture: ComponentFixture<ModifyProposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyProposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
