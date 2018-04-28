import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowReferencesComponent } from './show-references.component';

describe('ShowReferencesComponent', () => {
  let component: ShowReferencesComponent;
  let fixture: ComponentFixture<ShowReferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowReferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
