import { Component, OnInit } from '@angular/core';
import { Currency } from 'src/app/common/currency';
import { ExternalCurrencyService } from 'src/app/services/external-currency.service';
import { CurrencyService } from 'src/app/services/currency-service.service';
import { CurrencyTableService } from 'src/app/services/currency-table.service';
import { UAH_CODE, USD_CODE, EUR_CODE } from './constants';

@Component({
  selector: 'app-product-list',
  templateUrl: './currency-list.component.html', 
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnInit {

  currencies: Currency[] = [];
  currencyKeys: string[] = [];
  selectedProduct1!: Currency;
  selectedProduct2!: Currency;
  currencyValue1: number = 0;
  currencyValue2: number = 0;    
  currencyCode1: number = UAH_CODE;
  currencyCode2: number = UAH_CODE;

  constructor(private externalCurrencyService: ExternalCurrencyService,
              private currencyService: CurrencyService,
              private currencyTableService:  CurrencyTableService) {    
                                            
              }

  ngOnInit(): void {    
    this.listCurrencies(); 
    this.currencyKeys = this.currencyService.getCurrencyKeys();  
    this.selectedProduct1 = new Currency(UAH_CODE, UAH_CODE, new Date(), 1,1,1);
    this.selectedProduct2 = new Currency(UAH_CODE, UAH_CODE, new Date(), 1,1,1);
   
    
  }

  listCurrencies() {
    this.externalCurrencyService.getProductList().subscribe(
      data => {
        this.currencies = data;
        this.currencies.push(new Currency(UAH_CODE, UAH_CODE, new Date(), 1,1,1));           
        const usd = this.currencies.find(currency => currency.currencyCodeA == USD_CODE 
                                          && currency.currencyCodeB == UAH_CODE);
        if (usd) { 
          this.currencyTableService.currencyUsd = usd.rateBuy;  
        } 
        const eur = this.currencies.find(currency => currency.currencyCodeA == EUR_CODE 
                                          && currency.currencyCodeB == UAH_CODE);
        if (eur) { 
          this.currencyTableService.currencyEur = eur.rateBuy;  
        } 
      }
    )         
  }

  onChangeCurrency1(event: any) {  
    this.currencyCode1 = this.currencyService.getCurrencyCode(event.target.value) ?? 1;
    if (this.currencyCode1) {
      const product = this.currencies.find(currency => currency.currencyCodeA == this.currencyCode1 
        && currency.currencyCodeB == UAH_CODE);
      if (product) {
        this.selectedProduct1 = product;    
          
        this.onCalculate(1);
      }
    }
    
  }

  onChangeCurrency2(event: any) {    
    this.currencyCode2 = this.currencyService.getCurrencyCode(event.target.value) ?? 1;
    if (this.currencyCode2) {
      const product = this.currencies.find(currency => currency.currencyCodeA == this.currencyCode2  
        && currency.currencyCodeB == UAH_CODE);
      if (product) {
        this.selectedProduct2 = product;
        this.onCalculate(2);
      }
    }
  }  

  onCalculate(flag: number) {    
    if (flag === 1) {      
      if (this.selectedProduct1 && this.selectedProduct2) {
        this.currencyValue2 = parseFloat((this.currencyValue1 * this.selectedProduct1.rateBuy 
          / this.selectedProduct2.rateBuy).toFixed(2));         
      }
    } else {      
      if (this.selectedProduct1 && this.selectedProduct2) {
        this.currencyValue1 = parseFloat((this.currencyValue2 * this.selectedProduct2.rateBuy 
          / this.selectedProduct1.rateBuy).toFixed(2));;         
      }
    }
  }
}
