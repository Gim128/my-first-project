import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './ui/sample/sample.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CustomerPageComponent } from './components/customer-page/customer-page.component';
import { ItemPageComponent } from './components/item-page/item-page.component';
import { OrderPageComponent } from './components/order-page/order-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import {RouterModule} from "@angular/router";
import { SaveCustomerPageComponent } from './components/customer-page/inner-items/save-customer-page/save-customer-page.component';
import { UpdateCustomerPageComponent } from './components/customer-page/inner-items/update-customer-page/update-customer-page.component';
import { DeleteCustomerPageComponent } from './components/customer-page/inner-items/delete-customer-page/delete-customer-page.component';
import { SearchCustomerPageComponent } from './components/customer-page/inner-items/search-customer-page/search-customer-page.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    CustomerPageComponent,
    ItemPageComponent,
    OrderPageComponent,
    NotFoundPageComponent,
    LoginPageComponent,
    SaveCustomerPageComponent,
    UpdateCustomerPageComponent,
    DeleteCustomerPageComponent,
    SearchCustomerPageComponent

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
      RouterModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
