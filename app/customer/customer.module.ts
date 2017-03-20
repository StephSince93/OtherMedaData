//Modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CustomerRoutingModule } from './customer-routing.module'

//Component
import { CustomerListComponent } from './customer-list/customer-list.component';

@NgModule({
  imports:[ SharedModule, CustomerRoutingModule ],
  declarations:[ CustomerListComponent ],
  exports:[],
  providers: []
})
export class CustomerModule { }
