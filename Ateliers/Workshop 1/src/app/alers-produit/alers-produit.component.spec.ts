import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlersProduitComponent } from './alers-produit.component';

describe('AlersProduitComponent', () => {
  let component: AlersProduitComponent;
  let fixture: ComponentFixture<AlersProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlersProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlersProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
