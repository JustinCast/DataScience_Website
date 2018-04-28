import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsProposalComponent } from './details-proposal.component';

describe('DetailsProposalComponent', () => {
  let component: DetailsProposalComponent;
  let fixture: ComponentFixture<DetailsProposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsProposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
