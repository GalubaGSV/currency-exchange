import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private currencyMap = new Map<string, number>([
    ['UAH', 980],
    ['USD', 840],
    ['EUR', 978],    
  ]);

  getCurrencyCode(code: string): number | undefined {
    if (this.currencyMap.has(code)) {
      return this.currencyMap.get(code);
    } else {
      console.error(`Currency code not found: ${code}`);
      return undefined;
    }
  }
  
  getCurrencyKeys(): string[] {
    return Array.from(this.currencyMap.keys());
  }
}

