import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropzoneComponent } from './dropzone.component';
import { NgxDropzoneModule } from 'ngx-dropzone';



@NgModule({
  declarations: [DropzoneComponent],
  imports: [
    CommonModule,
    NgxDropzoneModule,
  ],
  exports:  [DropzoneComponent]
})
export class DropzoneModule { }
