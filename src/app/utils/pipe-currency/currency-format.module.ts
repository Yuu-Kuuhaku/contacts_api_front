import { CurrencyFormatPipe } from './currency-format.pipe';
import { CommonModule } from '@angular/common';
import { NgModule, LOCALE_ID } from '@angular/core';


@NgModule({
    imports: [
      CommonModule,
    ],
    declarations: [
      CurrencyFormatPipe,
    ],
    exports: [
     CurrencyFormatPipe,
    ]
  })
  export class CurrencyFormatPipeModule { }
