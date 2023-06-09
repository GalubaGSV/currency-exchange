import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Currency } from '../common/currency';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExternalCurrencyService {

  private baseUrl = 'https://api.monobank.ua/bank/currency'

  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<Currency[]> {
    return this.httpClient.get<Currency[]>(this.baseUrl);
  }
}
