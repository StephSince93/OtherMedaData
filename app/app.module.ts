//Module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerModule } from './customer/customer.module';
import { AppRoutingModule } from './app-routing.module'

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    imports: [ BrowserModule, CustomerModule, AppRoutingModule ],
    declarations: [ AppComponent, NavbarComponent ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
