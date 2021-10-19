import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { DropzoneModule } from './utils/components/dropzone/dropzone.module';
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'
import { ConverterComponent } from './converter/converter.component';
import { NotFoundModule } from './utils/pages/not-found/not-found.module';
import { RouterModule } from '@angular/router';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { Contacts_addComponent } from './pages/contacts_add/contacts_add.component';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DatePipe, HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { getPtBrPaginatorIntl } from './utils/pt-br-label-paginator/pt-br-paginator-intl';
import { InterceptorService } from './_services/interceptor.service';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent,
    ContactsComponent,
    Contacts_addComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
    DropzoneModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    NotFoundModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatIconModule,
  ],
  providers: [
    HttpClientModule,
    { provide: LOCALE_ID, useValue: 'pt-br' },
    { provide: MatPaginatorIntl, useValue: getPtBrPaginatorIntl() },
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
    { provide: LocationStrategy, useClass: HashLocationStrategy },


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
