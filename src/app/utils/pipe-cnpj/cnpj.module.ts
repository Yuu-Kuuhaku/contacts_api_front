import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CnpjPipe } from './cnpj.pipe';

@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [
      CnpjPipe,
    ],
    exports: [
      CnpjPipe,
    ]
  })
  export class CnpjPipeModule { }
  