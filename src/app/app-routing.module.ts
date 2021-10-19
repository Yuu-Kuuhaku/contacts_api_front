import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { NotFoundComponent } from './utils/pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: ContactsComponent,
  },
  // {
  //   path: 'conversor',
  //   component: ConverterComponent
  // },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
