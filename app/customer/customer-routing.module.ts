import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CustomerListComponent} from './customer-list/customer-list.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', redirectTo: 'customer', pathMatch: 'full'},
    { path: 'customer', component: CustomerListComponent },
    { path: '**', redirectTo: 'customer' }
  ])
],
  exports: [ RouterModule ]
})
export class CustomerRoutingModule{}
