import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompTestComponent } from './comp-test.component';

describe('CompTestComponent', () => {
  let component: CompTestComponent;
  let fixture: ComponentFixture<CompTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
