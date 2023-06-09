import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { CurrencyListComponent } from './components/product-list/currency-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ExternalCurrencyService } from './services/external-currency.service';
import { CurrencyService } from 'src/app/services/currency-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule  
  ],
  providers: [ExternalCurrencyService, CurrencyService],  
  bootstrap: [AppComponent]
})
export class AppModule { }
