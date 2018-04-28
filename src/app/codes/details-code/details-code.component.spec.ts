import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCodeComponent } from './details-code.component';

describe('DetailsCodeComponent', () => {
  let component: DetailsCodeComponent;
  let fixture: ComponentFixture<DetailsCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
