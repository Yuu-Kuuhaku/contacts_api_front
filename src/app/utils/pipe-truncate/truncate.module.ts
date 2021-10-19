import { TruncatePipe } from './truncate.pipe';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [
      TruncatePipe
    ],
    exports: [
      TruncatePipe
    ]
  })
  export class TruncatePipeModule { }
  