import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private currencyMap = new Map<string, number>([
    ['UAH', 980],
    ['USD', 840],
    ['EUR', 978],
    // додайте інші валюти, якщо потрібно
  ]);

  getCurrencyCode(code: string): number | undefined {
    if (this.currencyMap.has(code)) {
      return this.currencyMap.get(code);
    } else {
      console.error(`Currency code not found: ${code}`);
      return undefined;
    }
  }

  // додаємо метод, що повертає масив з ключів Map
  getCurrencyKeys(): string[] {
    return Array.from(this.currencyMap.keys());
  }
}

