import { Component } from '@angular/core';
import { CurrencyTableService } from 'src/app/services/currency-table.service';

@Component({
  selector: 'app-currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.css']
})
export class CurrencyTableComponent {
  currencyUsd: number = 1;
  currencyEur: number = 1;
  

  constructor(private currencyTableService:  CurrencyTableService) {                                       
    }

    ngOnInit(): void {
      this.currencyUsd = this.currencyTableService.currencyUsd;
      this.currencyEur = this.currencyTableService.currencyEur;
    }

    getCurrencyUsd(): number {
      this.currencyUsd = this.currencyTableService.currencyUsd;
      return this.currencyUsd;
    }

    getCurrencyEur(): number {
      this.currencyEur = this.currencyTableService.currencyEur;
      return this.currencyEur;
    }

}
