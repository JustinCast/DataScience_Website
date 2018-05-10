import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThematicsTableComponent } from './thematics-table.component';

describe('ThematicsTableComponent', () => {
  let component: ThematicsTableComponent;
  let fixture: ComponentFixture<ThematicsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThematicsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThematicsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
