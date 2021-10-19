import { PipeCardCreditModule } from './../pipe-card-credit/pipe-card-credit.module';
import { TruncatePipeModule } from './../pipe-truncate/truncate.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DynamicPipe } from './dynamic.pipe';
import { CnpjPipeModule } from '../pipe-cnpj/cnpj.module';

@NgModule({
    imports: [
      CommonModule,
      CnpjPipeModule,
      TruncatePipeModule,
      PipeCardCreditModule,
    ],
    declarations: [
      DynamicPipe,
    ],
    exports: [
      DynamicPipe,
    ]
  })
  export class DynamicPipeModule { }
