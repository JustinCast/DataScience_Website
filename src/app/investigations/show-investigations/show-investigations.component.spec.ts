import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInvestigationsComponent } from './show-investigations.component';

describe('ShowInvestigationsComponent', () => {
  let component: ShowInvestigationsComponent;
  let fixture: ComponentFixture<ShowInvestigationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowInvestigationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowInvestigationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
