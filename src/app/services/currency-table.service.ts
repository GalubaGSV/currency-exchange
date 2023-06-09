import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyTableService {
  currencyUsd: number = 0;
  currencyEur: number = 0;

  constructor() { }
}
