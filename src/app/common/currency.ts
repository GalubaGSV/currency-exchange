import { Data } from "@angular/router";

export class Currency {
    constructor(public currencyCodeA: number,
                public currencyCodeB: number,
                public date: Date,
                public rateSell: number,
                public rateBuy: number,
                public rateCross: number,                
        ) {
    }    
}
