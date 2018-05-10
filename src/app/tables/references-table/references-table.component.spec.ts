import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencesTableComponent } from './references-table.component';

describe('ReferencesTableComponent', () => {
  let component: ReferencesTableComponent;
  let fixture: ComponentFixture<ReferencesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferencesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferencesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
