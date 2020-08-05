import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsProduitComponent } from './details-produit.component';

describe('DetailsProduitComponent', () => {
  let component: DetailsProduitComponent;
  let fixture: ComponentFixture<DetailsProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
