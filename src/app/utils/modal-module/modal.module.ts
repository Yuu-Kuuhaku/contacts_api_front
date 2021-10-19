import { ModalConfirmFinishComponent } from './modal-confirm-finish/modal-confirm-finish.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ModalLoadingComponent } from './modal-loading/modal-loading.component';
import { MatButtonModule } from '@angular/material/button';
import {NgModule} from '@angular/core'
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { ModalConfirmDeleteComponent } from './modal-confirm-delete/modal-confirm-delete.component';
import { ModalErrorComponent } from './modal-error/modal-error.component';
import { ModalAlertasComponent } from './modal-alertas/modal-alertas.component';
import { LottieModule } from 'ngx-lottie';
import { AgmCoreModule } from '@agm/core';
import { ModalExitComponent } from './modal-exit/modal-exit.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
    imports:[
      CommonModule,
      MatButtonModule,
      MatDialogModule,
      MatProgressSpinnerModule,
      MatProgressBarModule,
      LottieModule,
      MatIconModule

     ],
    declarations:[
      ModalConfirmDeleteComponent,
      ModalErrorComponent,
      ModalAlertasComponent,
      ModalLoadingComponent,
      ModalConfirmFinishComponent,
      ModalExitComponent,
    ],
    exports:[
      ModalConfirmDeleteComponent,
      ModalErrorComponent,
      ModalAlertasComponent,
      ModalLoadingComponent,
      ModalConfirmFinishComponent,
      ModalExitComponent,
    ],
    entryComponents: [
      ModalErrorComponent,
      ModalConfirmDeleteComponent,
      ModalAlertasComponent,
      ModalLoadingComponent,
      ModalConfirmFinishComponent,
      ModalExitComponent,
    ]
})
export class ModalModule{
}
