import { TestBed } from '@angular/core/testing';

import { ExternalCurrencyService } from './external-currency.service';

describe('ExternalCurrencyService', () => {
  let service: ExternalCurrencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExternalCurrencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
