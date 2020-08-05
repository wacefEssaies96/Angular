import { TestBed } from '@angular/core/testing';

import { PanierService } from './panier.service';

describe('PanierService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PanierService = TestBed.get(PanierService);
    expect(service).toBeTruthy();
  });
});
